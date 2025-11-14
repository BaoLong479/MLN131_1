import {
  Component,
  signal,
  inject,
  viewChild,
  ElementRef,
  effect,
  computed,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GeminiService, ChatMessage } from "../../services/gemini.service";
import { CookieService } from "ngx-cookie-service";

import { MarkdownModule } from "ngx-markdown";

@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.component.html",
  imports: [CommonModule, FormsModule, MarkdownModule],
  providers: [CookieService],
})
export class ChatbotComponent implements OnInit {
  private geminiService = inject(GeminiService);
  private cookieService = inject(CookieService);

  isOpen = signal(false);
  isExpanded = signal(false);
  messages = signal<ChatMessage[]>([]);
  isLoading = signal(false);
  currentMessage = "";
  private userId = "";
  private storageKey = "";

  chatContainer = viewChild<ElementRef<HTMLDivElement>>("chatContainer");

  constructor() {
    effect(() => {
      const currentMessages = this.messages();
      if (this.storageKey && currentMessages.length > 0) {
        localStorage.setItem(this.storageKey, JSON.stringify(currentMessages));
      }
      if (currentMessages && this.chatContainer()) {
        this.scrollToBottom();
      }
    });
  }

  ngOnInit(): void {
    this.initializeUser();
    this.loadConversation();
  }

  private initializeUser(): void {
    const userIdCookie = "chatbot_user_id";
    if (this.cookieService.check(userIdCookie)) {
      this.userId = this.cookieService.get(userIdCookie);
    } else {
      this.userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      this.cookieService.set(userIdCookie, this.userId, 365); // Expires in 365 days
    }
    this.storageKey = `chat_history_${this.userId}`;
  }

  private loadConversation(): void {
    const savedMessages = localStorage.getItem(this.storageKey);
    if (savedMessages) {
      this.messages.set(JSON.parse(savedMessages));
    } else {
      this.messages.set([
        {
          role: "model",
          parts: [
            { text: "Xin chào! Tôi có thể giúp gì cho bạn trong môn học này?" },
          ],
        },
      ]);
    }
  }

  toggleChat(): void {
    this.isOpen.update((open) => !open);
  }

  toggleExpand(): void {
    this.isExpanded.update((expanded) => !expanded);
  }

  restartChat(): void {
    localStorage.removeItem(this.storageKey);
    this.messages.set([
      {
        role: "model",
        parts: [
          {
            text: "Cuộc trò chuyện đã được bắt đầu lại. Tôi có thể giúp gì cho bạn?",
          },
        ],
      },
    ]);
    this.isLoading.set(false);
  }

  handleKeyDown(event: KeyboardEvent): void {
    // Submit on Enter (without Shift)
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage(event);
    }
    // Allow Shift+Enter for new line (default behavior)
  }

  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  async sendMessage(event: Event): Promise<void> {
    event.preventDefault();
    const messageToSend = this.currentMessage;
    if (messageToSend.trim() === "" || this.isLoading()) {
      return;
    }
    this.currentMessage = ""; // Clear input immediately for better UX
    
    // Reset textarea height
    setTimeout(() => {
      const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      if (textarea) {
        textarea.style.height = 'auto';
      }
    }, 0);
    
    await this.submitMessage(messageToSend);
  }

  public async askQuestion(question: string): Promise<void> {
    this.isOpen.set(true);
    // Frame the selected text as a question for better context
    const fullQuestion = `Tôi muốn biết thêm về nội dung này: "${question}"`;
    await this.submitMessage(fullQuestion);
  }

  private async submitMessage(messageText: string): Promise<void> {
    if (messageText.trim() === "" || this.isLoading()) {
      return;
    }

    const userMessage: ChatMessage = {
      role: "user",
      parts: [{ text: messageText }],
    };
    this.messages.update((msgs) => [...msgs, userMessage]);

    const messageHistory = this.messages();
    this.isLoading.set(true);
    this.scrollToBottom();

    // Create an empty model message to stream into
    const modelMessage: ChatMessage = {
      role: "model",
      parts: [{ text: "" }],
    };
    this.messages.update((msgs) => [...msgs, modelMessage]);

    try {
      // Subscribe to streaming response
      this.geminiService.generateChatResponseStream(messageHistory).subscribe({
        next: (chunk: any) => {
          if (chunk.content) {
            // Update the last message (the one we just added) with streamed content
            this.messages.update((msgs) => {
              const updated = [...msgs];
              const lastMsg = updated[updated.length - 1];
              if (lastMsg.role === "model") {
                lastMsg.parts[0].text += chunk.content;
              }
              return updated;
            });
            // Once we start receiving content, we're no longer in initial loading state
            if (this.isLoading()) {
              this.isLoading.set(false);
            }
            this.scrollToBottom();
          }
        },
        error: (error: any) => {
          console.error("Error in chat stream:", error);
          // Remove the empty model message and add error message
          this.messages.update((msgs) => {
            const updated = msgs.slice(0, -1); // Remove the empty message
            return [...updated, {
              role: "model",
              parts: [{ text: "Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại." }],
            }];
          });
          this.isLoading.set(false);
          this.scrollToBottom();
        },
        complete: () => {
          this.isLoading.set(false);
          this.scrollToBottom();
        }
      });
    } catch (error) {
      console.error("Error in chat:", error);
      // Remove the empty model message and add error message
      this.messages.update((msgs) => {
        const updated = msgs.slice(0, -1); // Remove the empty message
        return [...updated, {
          role: "model",
          parts: [{ text: "Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại." }],
        }];
      });
      this.isLoading.set(false);
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const container = this.chatContainer()?.nativeElement;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  }
}
