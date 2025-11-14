
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './src/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    importProvidersFrom(MarkdownModule.forRoot())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
