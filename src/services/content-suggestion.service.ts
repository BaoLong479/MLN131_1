import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface ContentSuggestion {
  questions: string[];
  loading: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentSuggestionService {
  private http = inject(HttpClient);
  private apiUrl = '/api/chat';
  private cache = new Map<string, string[]>();

  async generateSuggestions(content: string, blockType: string): Promise<string[]> {
    const cacheKey = `${blockType}-${content.substring(0, 100)}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    try {
      const prompt = this.buildPrompt(content, blockType);
      const response = await firstValueFrom(
        this.http.post<{ response: string }>(this.apiUrl, {
          history: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ]
        })
      );

      const suggestions = this.parseSuggestions(response.response);
      this.cache.set(cacheKey, suggestions);
      return suggestions;
    } catch (error) {
      console.error('Error generating suggestions:', error);
      return [];
    }
  }

  private buildPrompt(content: string, blockType: string): string {
    let context = '';

    switch (blockType) {
      case 'paragraph':
        context = 'đoạn văn này';
        break;
      case 'list':
        context = 'danh sách các điểm này';
        break;
      case 'case-study':
        context = 'tình huống thực tế này';
        break;
      default:
        context = 'nội dung này';
    }

    return `Dựa vào ${context} về Chủ nghĩa Xã hội Khoa học:

"${content}"

Hãy tạo ra 3 câu hỏi ngắn gọn (mỗi câu không quá 15 từ) mà sinh viên có thể hỏi để hiểu sâu hơn về nội dung này.
Các câu hỏi nên:
- Khuyến khích tư duy phản biện
- Liên hệ với thực tế
- Giúp làm rõ khái niệm

Chỉ trả về 3 câu hỏi, mỗi câu trên một dòng, bắt đầu bằng số thứ tự (1., 2., 3.)`;
  }

  private parseSuggestions(response: string): string[] {
    const lines = response.split('\n').filter(line => line.trim());
    const questions: string[] = [];

    for (const line of lines) {
      const match = line.match(/^\d+\.\s*(.+)$/);
      if (match) {
        questions.push(match[1].trim());
      }
    }

    if (questions.length === 0) {
      return [
        'Giải thích rõ hơn về nội dung này?',
        'Cho ví dụ thực tế về vấn đề này?',
        'Điểm quan trọng cần ghi nhớ là gì?'
      ];
    }

    return questions.slice(0, 3);
  }

  clearCache(): void {
    this.cache.clear();
  }
}
