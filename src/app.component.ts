import { Component, ChangeDetectionStrategy, signal, inject, viewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from './services/content.service';
import { Chapter, Section, QuizQuestion } from './models/content.model';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentViewerComponent } from './components/content-viewer/content-viewer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { TextbookComponent } from './components/textbook/textbook.component';
import { GameComponent } from './components/game/game.component';
import { MindmapComponent } from './components/mindmap/mindmap.component';
import { PhotoRestoreComponent } from './components/photo-restore/photo-restore.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';

type AppView = 'learn' | 'quiz' | 'textbook' | 'game' | 'mindmap' | 'photo-restore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    LoadingPageComponent,
    SidebarComponent,
    ContentViewerComponent,
    ChatbotComponent,
    QuizComponent,
    QuizSelectionComponent,
    TextbookComponent,
    GameComponent,
    MindmapComponent,
    PhotoRestoreComponent,
  ]
})
export class AppComponent {
  private contentService = inject(ContentService);
  
  chapters = signal<Chapter[]>([]);
  currentSection = signal<Section | null>(null);
  currentView = signal<AppView>('learn');
  activeQuiz = signal<{title: string, questions: QuizQuestion[]} | null>(null);
  isLoading = signal<boolean>(true);
  sidebarCollapsed = signal<boolean>(true); // Auto-collapse sidebar on load

  chatbot = viewChild.required(ChatbotComponent);
  sidebar = viewChild.required(SidebarComponent);

  constructor() {
    this.chapters.set(this.contentService.getChapters());
  }

  onLoadingComplete(): void {
    this.isLoading.set(false);
  }

  setView(view: AppView): void {
    this.currentView.set(view);
    if (view === 'learn') {
      this.activeQuiz.set(null);
    } else {
      this.currentSection.set(null);
    }
  }

  onSectionSelect(section: Section, event?: MouseEvent): void {
    event?.preventDefault();
    this.setView('learn');
    this.currentSection.set(section);
    document.querySelector('.flex-1.overflow-y-auto')?.scrollTo(0, 0);
  }

  onQuizSelected(context: {title: string, questions: QuizQuestion[]}): void {
    this.activeQuiz.set(context);
  }

  askChatbot(text: string): void {
    this.chatbot().askQuestion(text);
  }

  closeQuiz(): void {
    this.activeQuiz.set(null); // Go back to quiz selection screen
  }
}