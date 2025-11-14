import { Component, input, signal, effect, output, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Section } from '../../models/content.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentSuggestionService } from '../../services/content-suggestion.service';

type FeedbackState = 'correct' | 'incorrect' | null;

interface BlockSuggestion {
  visible: boolean;
  loading: boolean;
  suggestions: string[];
  error?: string;
}

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  imports: [CommonModule, FormsModule],
  host: {
    '(document:mouseup)': 'handleSelection($event)'
  }
})
export class ContentViewerComponent {
  section = input.required<Section>();
  textSelectedForChat = output<string>();

  // State for the selection popup
  popup = signal({ visible: false, top: 0, left: 0, text: '', position: 'top' as 'top' | 'bottom' });

  // State for Fill-in-the-blank
  fillInTheBlankAnswers = signal<string[]>([]);
  fillInTheBlankFeedback = signal<FeedbackState[]>([]);

  // State for page-level suggestions (lazy loaded)
  pageSuggestions = signal<BlockSuggestion>({
    visible: false,
    loading: false,
    suggestions: []
  });

  private elementRef = inject(ElementRef);
  private sanitizer = inject(DomSanitizer);
  private suggestionService = inject(ContentSuggestionService);

  constructor() {
    effect(() => {
      const currentSection = this.section();

      this.resetInteractiveStates();
      this.pageSuggestions.set({
        visible: false,
        loading: false,
        suggestions: []
      });

      console.log('Section changed:', currentSection.title);
    });
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  handleSelection(event: MouseEvent): void {
    const popupEl = this.elementRef.nativeElement.querySelector('#selectionPopup');
    if (popupEl?.contains(event.target as Node)) {
      return;
    }

    setTimeout(() => {
      const selection = globalThis.window.getSelection();

      if (!selection || selection.rangeCount === 0) {
        this.popup.update(p => ({ ...p, visible: false }));
        return;
      }

      const range = selection.getRangeAt(0);
      const hostEl = this.elementRef.nativeElement;

      const isInside = hostEl.contains(range.commonAncestorContainer);
      const selectedText = selection.toString().trim();

      if (isInside && selectedText.length > 10) {
        const rect = range.getBoundingClientRect();
        const container = hostEl.querySelector('article');
        if (!container) return;
        const containerRect = container.getBoundingClientRect();

        const POPUP_ESTIMATED_HEIGHT = 55;
        const GAP = 10;

        const spaceAvailableAbove = rect.top - containerRect.top;
        const position = spaceAvailableAbove > POPUP_ESTIMATED_HEIGHT ? 'top' : 'bottom';

        const top = position === 'top'
          ? rect.top - containerRect.top - POPUP_ESTIMATED_HEIGHT
          : rect.bottom - containerRect.top + GAP;

        const left = rect.left - containerRect.left + (rect.width / 2);

        this.popup.set({
          visible: true,
          top: top,
          left: left,
          text: selectedText,
          position: position
        });
      } else {
        this.popup.update(p => ({ ...p, visible: false }));
      }
    }, 10);
  }

  askChatbot(): void {
    this.textSelectedForChat.emit(this.popup().text);
    this.popup.update(p => ({ ...p, visible: false }));
  }

  private resetInteractiveStates() {
    this.fillInTheBlankAnswers.set([]);
    this.fillInTheBlankFeedback.set([]);
  }

  updateFillInTheBlankAnswer(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const currentAnswers = [...this.fillInTheBlankAnswers()];
    currentAnswers[index] = input.value;
    this.fillInTheBlankAnswers.set(currentAnswers);
  }

  checkFillInTheBlank(sentences: { textParts: [string, string]; answer: string }[]) {
    const feedback: FeedbackState[] = sentences.map((sentence, index) => {
      const userAnswer = this.fillInTheBlankAnswers()[index]?.trim().toLowerCase();
      const correctAnswer = sentence.answer.trim().toLowerCase();
      return userAnswer === correctAnswer ? 'correct' : 'incorrect';
    });
    this.fillInTheBlankFeedback.set(feedback);
  }

  async togglePageSuggestions() {
    const current = this.pageSuggestions();

    if (current.visible) {
      this.pageSuggestions.set({ ...current, visible: false });
      return;
    }

    if (current.suggestions.length > 0) {
      this.pageSuggestions.set({ ...current, visible: true });
      return;
    }

    this.pageSuggestions.set({
      visible: true,
      loading: true,
      suggestions: []
    });

    try {
      const section = this.section();
      const content = this.extractPageContent(section);
      const loadedSuggestions = await this.suggestionService.generateSuggestions(content, 'section');

      this.pageSuggestions.set({
        visible: true,
        loading: false,
        suggestions: loadedSuggestions
      });
    } catch (error) {
      console.error('Error generating suggestions:', error);
      this.pageSuggestions.set({
        visible: true,
        loading: false,
        suggestions: [],
        error: 'Không thể tạo gợi ý. Vui lòng thử lại.'
      });
    }
  }

  askAboutPage(suggestionText?: string) {
    const section = this.section();
    const content = this.extractPageContent(section);
    const contextPrompt = `Dựa vào nội dung bài học "${section.title}":\n\n"${content.substring(0, 500)}..."\n\n`;
    const question = suggestionText || 'Giải thích rõ hơn về nội dung bài học này?';

    this.textSelectedForChat.emit(contextPrompt + question);

    this.pageSuggestions.update(current => ({ ...current, visible: false }));
  }

  private extractPageContent(section: Section): string {
    return section.content.map(block => {
      switch (block.type) {
        case 'paragraph':
          return block.text;
        case 'list':
          return block.items.join('. ');
        case 'case-study':
          return `${block.title}: ${block.scenario}`;
        case 'image':
        case 'diagram':
        case 'video':
          return block.caption;
        case 'fill-in-the-blank':
          return block.sentences.map(s => s.textParts.join('___')).join('. ');
        default:
          return '';
      }
    }).join('\n\n');
  }
}
