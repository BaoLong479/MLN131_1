# Overview

This educational web application is designed for non-specialist university students in Vietnam to learn "Scientific Socialism" (Chủ nghĩa Xã hội Khoa học). It offers interactive learning materials, quizzes, and an AI-powered chatbot. The application aims to provide a comprehensive and engaging platform for students to understand course content.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with Angular 20, leveraging standalone components, zoneless change detection, and signals for optimized performance and state management. Styling is handled using Tailwind CSS loaded via CDN, and external dependencies are loaded via ES module imports from CDNs, simplifying the build process.

## Backend Architecture

The backend uses Express.js to provide a minimal REST API, primarily for AI chatbot interactions and an AI-powered photo restoration feature. It handles API key security by storing keys server-side and uses environment variables for configuration. CORS is enabled to facilitate development across different ports.

## AI Integration

AI capabilities, including the chatbot and photo restoration, are powered by the OpenAI API (or compatible alternatives). The backend acts as a secure intermediary, preventing API key exposure and allowing flexible model selection via environment variables. The chatbot includes context-aware system instructions with custom citation rules.

## Data Architecture

Educational content and quiz data are hardcoded within `content.service.ts` as TypeScript objects. This approach simplifies deployment by avoiding database dependencies, suitable for static, curated content. Content is structured into chapters, sections, and various block types (paragraph, list, image, video, interactive elements).

## Component Architecture

Key components manage different aspects of the application, including:
- **AppComponent**: Root view management (learn, quiz, game, textbook, mindmap, photo-restore).
- **SidebarComponent**: Navigation.
- **ContentViewerComponent**: Displays content.
- **ChatbotComponent**: AI assistant interface with markdown rendering and conversation history.
- **QuizComponent**: Interactive quizzes with per-question checking and AI explanations.
- **MindmapComponent**: Interactive D3.js-based visualization from XML data.
- **PhotoRestoreComponent**: AI-powered image enhancement.
- **GameComponent**: Integration with an external Ren'Py visual novel.
- **TextbookComponent**: PDF viewer.

Communication between components primarily uses Angular's `input()` and `output()` signals.

## Build and Deployment

The application uses Angular CLI with Vite for development and production builds. Both frontend and backend run concurrently. Deployment on Replit utilizes `autoscale` for stateless applications, with Replit Secrets managing API keys and exposing port 5000 for the frontend web view.

# External Dependencies

## Core Framework
- **@angular/core, @angular/common, @angular/platform-browser**: Core Angular framework.
- **rxjs**: Reactive programming library.

## Backend
- **express**: Web server framework.
- **cors**: Cross-origin resource sharing.
- **openai**: OpenAI SDK for AI features.
- **dotenv**: Environment variable management.

## Styling & UI
- **tailwindcss**: Utility-first CSS framework (CDN).
- **marked**: Markdown parser.
- **ngx-markdown**: Angular component for rendering Markdown.

## Visualization & Media
- **d3**: Data visualization for mind maps.
- **ng2-pdf-viewer**: PDF viewer component.
- **ngx-cookie-service**: Cookie management.

## Development Tools
- **concurrently**: Runs multiple scripts.
- **@angular/cli, @angular/build**: Angular CLI and build system.
- **TypeScript**: Type-safe JavaScript.
- **Vite**: Fast build tool.

## CDN Resources
- **Tailwind CSS**: Styling.
- **Marked.js**: Markdown rendering.
- **Google Fonts**: Be Vietnam Pro font.
- **esm.sh**: CDN for Angular and other dependencies.

## Environment Variables
- **OPENAI_API_KEY**: Required for AI chatbot.
- **PHOTO_RESTORE_API_KEY**: Required for photo restoration.
- **OPENAI_BASE_URL**: Optional, custom base URL for OpenAI-compatible APIs.
- **OPENAI_MODEL**: Optional, AI model for chatbot.
- **PHOTO_RESTORE_BASE_URL**: Optional, custom base URL for photo restoration.
- **PHOTO_RESTORE_MODEL**: Optional, model for photo restoration.

# Recent Changes (November 11, 2025)

## Enhanced Chatbot with Conversation Persistence
- Added per-user conversation history using cookie-based user IDs
- Conversation history persists across page reloads via localStorage
- Added "Restart Chat" button to clear conversation
- Added "Expand/Collapse" button for resizable chat window
- Switched from innerHTML to ngx-markdown for secure rendering (XSS protection)
- User ID stored in cookies (365-day expiration, SameSite=Lax)

## Enhanced Quiz with Per-Question Checking
- Users can check individual answers instead of submitting entire quiz
- AI-powered explanations for each question via GeminiService.generateText()
- Visual feedback shows correct/incorrect answers immediately
- "Restart Quiz" button in header and finish screen
- Enhanced review section with color-coded answers
- **NOTE**: Quiz progress does NOT persist across page reloads (cookie persistence removed for cleaner UX)

## AI-Powered Content Suggestions
- New ContentSuggestionService generates contextual questions for learning materials
- Caching mechanism to avoid redundant API calls
- Page-level suggestions appear on content-viewer hover
- Floating "Hỏi AI về nội dung này" button (purple gradient)
- Suggestions panel with 3 AI-generated questions + custom question option
- Animated loading states and error handling

## Enhanced Chatbot Styling
- Rich markdown formatting (headings, lists, code blocks, tables)
- Custom red-themed numbered/bulleted lists
- Blockquotes, code highlighting, table styling
- fadeIn animations for smooth UI transitions
- Improved readability with proper spacing and colors

## Technical Improvements
- Added importProvidersFrom(MarkdownModule.forRoot()) to index.tsx
- Inline provider configuration (provideZonelessChangeDetection, provideHttpClient, MarkdownModule)
- ContentSuggestionService integrates with /api/chat endpoint
- extractPageContent() method aggregates section content for AI context
- No regressions to existing features (MindMap, Photo Restoration, Game, Textbook)