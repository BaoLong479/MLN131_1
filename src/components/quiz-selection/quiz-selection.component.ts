import { Component, ChangeDetectionStrategy, inject, output, signal, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { Chapter, QuizQuestion } from '../../models/content.model';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  imports: [CommonModule],
})
export class QuizSelectionComponent {
  private contentService = inject(ContentService);
  quizSelected = output<{ title: string; questions: QuizQuestion[] }>();

  chapters = input.required<Chapter[]>();

  chaptersWithQuizInfo = computed(() => {
    return this.chapters().map(chapter => ({
      ...chapter,
      mcCount: chapter.quiz.filter(q => q.type === 'multiple-choice').length,
      matchingCount: chapter.quiz.filter(q => q.type === 'matching').length
    }));
  });

  startChapterQuiz(chapter: Chapter, type: 'multiple-choice' | 'matching'): void {
    const questions = chapter.quiz.filter(q => q.type === type);
    if (questions.length > 0) {
      this.quizSelected.emit({
        title: `${type === 'multiple-choice' ? 'Trắc nghiệm' : 'Nối từ'} - ${chapter.title}`,
        questions: questions,
      });
    }
  }

  startComprehensiveMcQuiz(): void {
    const allQuestions = this.contentService.getAllMultipleChoiceQuestions();
     if (allQuestions.length > 0) {
      this.quizSelected.emit({
        title: 'Ôn tập trắc nghiệm tổng hợp',
        questions: allQuestions,
      });
    }
  }

  startComprehensiveMatchingQuiz(): void {
    const allQuestions = this.contentService.getAllMatchingQuestions();
    if (allQuestions.length > 0) {
      this.quizSelected.emit({
        title: 'Ôn tập nối từ tổng hợp',
        questions: allQuestions,
      });
    }
  }
}