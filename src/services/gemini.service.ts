import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'model' | 'assistant';
  parts: { text: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private http = inject(HttpClient);
  private apiUrl = '/api/chat';

  constructor() {}

  async generateText(prompt: string): Promise<string> {
    const history: ChatMessage[] = [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ];
    return this.generateChatResponse(history);
  }

  /**
   * Generates chat response and returns an Observable that streams the response chunks
   * Each chunk is emitted as it arrives from the server
   */
  generateChatResponseStream(history: ChatMessage[]): Observable<any> {
    return new Observable(observer => {
      // Use fetch with ReadableStream for POST request with streaming response
      fetch('/api/chat/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ history }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const reader = response.body?.getReader();
          const decoder = new TextDecoder();
          
          if (!reader) {
            throw new Error('No response body reader');
          }

          const processStream = async () => {
            let buffer = '';
            
            try {
              while (true) {
                const { done, value } = await reader.read();
                
                if (done) {
                  observer.complete();
                  break;
                }
                
                // Decode the chunk and add to buffer
                buffer += decoder.decode(value, { stream: true });
                
                // Split by double newlines (SSE message separator)
                const messages = buffer.split('\n\n');
                
                // Keep the last incomplete message in the buffer
                buffer = messages.pop() || '';
                
                for (const message of messages) {
                  const lines = message.split('\n');
                  
                  for (const line of lines) {
                    if (line.startsWith('data: ')) {
                      const data = line.slice(6).trim();
                      
                      if (data === '[DONE]') {
                        observer.complete();
                        return;
                      }
                      
                      if (data) {
                        try {
                          const parsed = JSON.parse(data);
                          // Backend returns simple format: { content: "..." }
                          const content = parsed.content;
                          
                          if (content) {
                            observer.next({ content });
                          }
                        } catch (error) {
                          console.error('Error parsing stream data:', error, data);
                        }
                      }
                    }
                  }
                }
              }
            } catch (error) {
              console.error('Stream processing error:', error);
              observer.error(error);
            }
          };

          processStream();
        })
        .catch(error => {
          console.error('Fetch error:', error);
          observer.error(error);
        });

      // Cleanup function
      return () => {
        // Nothing to cleanup with fetch
      };
    });
  }

  /**
   * Legacy method - kept for backward compatibility
   * Falls back to non-streaming if needed
   */
  async generateChatResponse(history: ChatMessage[]): Promise<string> {
    try {
      return new Promise((resolve, reject) => {
        let fullResponse = '';
        
        this.generateChatResponseStream(history).subscribe({
          next: (chunk) => {
            if (chunk.content) {
              fullResponse += chunk.content;
            }
          },
          error: (error) => {
            console.error('Error calling backend API:', error);
            reject(new Error('Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.'));
          },
          complete: () => {
            resolve(fullResponse || 'Xin lỗi, không thể tạo câu trả lời.');
          }
        });
      });
    } catch (error) {
      console.error('Error calling backend API:', error);
      return 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.';
    }
  }
}