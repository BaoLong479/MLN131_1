import { Component, ChangeDetectionStrategy, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter, Section } from '../../models/content.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule],
})
export class SidebarComponent {
  chapters = input.required<Chapter[]>();
  activeView = input.required<'learn' | 'quiz'>();
  initialCollapsed = input<boolean>(false);
  sectionSelected = output<Section>();
  
  selectedSectionId = signal<string | null>(null);
  expandedChapters = signal<Set<string>>(new Set());
  isCollapsed = signal<boolean>(false);

  constructor() {
    // Set initial collapsed state from input
    effect(() => {
      this.isCollapsed.set(this.initialCollapsed());
    });
    
    effect(() => {
      // When the main view changes away from 'learn', clear the selection
      if (this.activeView() !== 'learn') {
        this.selectedSectionId.set(null);
      }
    });
  }

  toggleSidebar(): void {
    const collapsed = !this.isCollapsed();
    this.isCollapsed.set(collapsed);
    
    // When collapsing, close all expanded chapters
    if (collapsed) {
      this.expandedChapters.set(new Set());
    }
  }

  toggleChapter(chapterId: string): void {
    const expanded = new Set(this.expandedChapters());
    if (expanded.has(chapterId)) {
      expanded.delete(chapterId);
    } else {
      expanded.add(chapterId);
    }
    this.expandedChapters.set(expanded);
  }

  selectSection(section: Section, event: MouseEvent): void {
    event.preventDefault();
    this.selectedSectionId.set(section.id);
    this.sectionSelected.emit(section);
    
    // Auto-expand the chapter containing this section
    const chapter = this.chapters().find(ch => 
      ch.sections.some(s => s.id === section.id)
    );
    if (chapter) {
      const expanded = new Set(this.expandedChapters());
      expanded.add(chapter.id);
      this.expandedChapters.set(expanded);
    }
    
    // Auto-collapse on mobile after selection
    if (window.innerWidth < 768) { // md breakpoint
      this.isCollapsed.set(true);
      this.expandedChapters.set(new Set());
    }
  }
}