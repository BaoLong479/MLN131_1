export interface Section {
  id: string;
  title: string;
  chapterTitle: string;
  content: ContentBlock[];
  citation: string;
}

export type ContentBlock = 
  | { type: 'paragraph'; text: string; }
  | { type: 'list'; items: string[]; }
  | { type: 'image'; url: string; caption: string; }
  | { type: 'diagram'; url: string; caption: string; }
  | { type: 'case-study'; title: string; scenario: string; questions: string[]; }
  | { type: 'fill-in-the-blank'; sentences: { textParts: [string, string]; answer: string }[]; }
  | { type: 'video'; url: string; caption: string; };

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
  quiz: QuizQuestion[];
}

export interface MultipleChoiceQuestion {
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface MatchingPair {
  term: string;
  definition: string;
}

export interface MatchingQuestion {
  type: 'matching';
  question: string;
  pairs: MatchingPair[];
}

export type QuizQuestion = MultipleChoiceQuestion | MatchingQuestion;

// FIX: Added missing PlacementTestQuestion interface.
export interface PlacementTestQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  relatedSectionId: string;
}

export interface TextbookPage {
  pageNumber: number;
  content: string;
}

export interface TextbookChapter {
  title: string;
  pages: TextbookPage[];
}

export interface Textbook {
  title: string;
  chapters: TextbookChapter[];
}