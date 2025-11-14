import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-textbook',
  templateUrl: './textbook.component.html',
  imports: [CommonModule, PdfViewerModule]
})
export class TextbookComponent {
  pdfSrc = '/giao-trinh.pdf';
  currentPage = signal(1);
  totalPages = signal(0);
  zoom = signal(0.7);
  isLoading = signal(true);

  onPdfLoad(event: any) {
    console.log('PDF loaded successfully:', event);
    this.totalPages.set(event.numPages);
    this.isLoading.set(false);
  }

  onPdfError(error: any) {
    console.error('Error loading PDF:', error);
    this.isLoading.set(false);
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  goToPage(pageNum: number) {
    if (pageNum >= 1 && pageNum <= this.totalPages()) {
      this.currentPage.set(pageNum);
    }
  }

  zoomIn() {
    this.zoom.update(z => Math.min(z + 0.1, 2.0));
  }

  zoomOut() {
    this.zoom.update(z => Math.max(z - 0.1, 0.5));
  }

  resetZoom() {
    this.zoom.set(0.7);
  }
}