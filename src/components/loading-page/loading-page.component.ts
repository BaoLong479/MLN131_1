import { Component, ChangeDetectionStrategy, output, signal, ElementRef, viewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPageComponent implements AfterViewInit {
  loadingComplete = output<void>();
  startLogoAnimation = signal<boolean>(false);
  logoAnimationStyle = signal<{ [key: string]: string }>({});

  logoContainer = viewChild<ElementRef>('logoContainer');

  ngAfterViewInit() {
    // Calculate the target position (header logo)
    setTimeout(() => {
      const headerLogo = document.querySelector('.header-logo img');
      if (headerLogo && this.logoContainer()?.nativeElement) {
        const headerRect = headerLogo.getBoundingClientRect();
        const logoElement = this.logoContainer()?.nativeElement;
        const logoRect = logoElement.getBoundingClientRect();

        // Calculate the distance to move
        const deltaX = headerRect.left - logoRect.left;
        const deltaY = headerRect.top - logoRect.top;
        const scale = headerRect.width / logoRect.offsetWidth;

        // Set custom animation variables
        this.logoAnimationStyle.set({
          '--delta-x': `${deltaX}px`,
          '--delta-y': `${deltaY}px`,
          '--scale': `${scale}`,
        } as any);
      }

      // After 2 seconds, start logo animation
      setTimeout(() => {
        this.startLogoAnimation.set(true);
      }, 2000);

      // After 3 seconds total, emit loading complete
      setTimeout(() => {
        this.loadingComplete.emit();
      }, 3000);
    }, 100);
  }
}
