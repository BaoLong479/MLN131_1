import { Component, ChangeDetectionStrategy, signal, computed, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { PlacementTestQuestion } from '../../models/content.model';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  imports: [CommonModule],
})
export class PlacementTestComponent {
  private contentService = inject(ContentService);

  testFinished = output<string[]>();
  closeModal = output<void>();

  questions = signal<PlacementTestQuestion[]>([]);
  currentQuestionIndex = signal(0);
  // FIX: Allow null in userAnswers to correctly handle unanswered questions.
  userAnswers = signal<(string | null)[]>([]);
  isFinished = signal(false);

  currentQuestion = computed(() => {
    const q = this.questions();
    const i = this.currentQuestionIndex();
    return q.length > i ? q[i] : null;
  });

  constructor() {
    const loadedQuestions = this.contentService.getPlacementTestQuestions();
    this.questions.set(loadedQuestions);
    this.userAnswers.set(new Array(loadedQuestions.length).fill(null));
  }
  
  selectAnswer(option: string): void {
    this.userAnswers.update(answers => {
      const newAnswers = [...answers];
      newAnswers[this.currentQuestionIndex()] = option;
      return newAnswers;
    });
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex() < this.questions().length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
    } else {
      this.isFinished.set(true);
    }
  }

  prevQuestion(): void {
     if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update(i => i - 1);
    }
  }

  finishTest(): void {
    const incorrectSectionIds: string[] = [];
    this.questions().forEach((question, index) => {
      if (this.userAnswers()[index] !== question.correctAnswer) {
        incorrectSectionIds.push(question.relatedSectionId);
      }
    });
    this.testFinished.emit(incorrectSectionIds);
  }
}
