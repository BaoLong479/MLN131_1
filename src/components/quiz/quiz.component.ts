import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  computed,
  inject,
  OnInit,
  effect,
  output,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";
import {
  QuizQuestion,
  MatchingQuestion,
  MatchingPair,
} from "../../models/content.model";
import { GeminiService, ChatMessage } from "../../services/gemini.service";

type QuizState = "active" | "finished";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  imports: [CommonModule, MarkdownModule],
})
export class QuizComponent implements OnInit {
  title = input.required<string>();
  questions = input.required<QuizQuestion[]>();
  quizClosed = output<void>();

  state = signal<QuizState>("active");
  currentQuestionIndex = signal(0);
  userAnswers = signal<any[]>([]);
  score = signal(0);

  // New state for single question checking
  checkedAnswers = signal<boolean[]>([]);
  isCorrect = signal<boolean[]>([]);
  explanations = signal<(string | null)[]>([]);
  isExplaining = signal<boolean[]>([]);

  // State for matching questions
  matchingTerms = signal<string[]>([]);
  matchingShuffledDefinitions = signal<MatchingPair[]>([]);

  progress = computed(() => {
    if (this.questions().length === 0) return 0;
    if (this.state() === "finished") return 100;
    return ((this.currentQuestionIndex() + 1) / this.questions().length) * 100;
  });

  currentQuestion = computed(() => {
    const q = this.questions();
    const i = this.currentQuestionIndex();
    return q.length > i ? q[i] : null;
  });

  scorePercentage = computed(() => {
    const total = this.questions().length;
    return total > 0 ? (this.score() / total) * 100 : 0;
  });

  private geminiService = inject(GeminiService);

  constructor() {
    effect(
      () => {
        // Re-initialize when a new quiz starts (questions input changes)
        this.startQuiz();
      },
      { allowSignalWrites: true },
    );

    effect(() => {
      // When current question changes, check if it's a matching question
      const question = this.currentQuestion();
      if (question && question.type === "matching") {
        this.initializeMatchingQuestion(question);
      }
    });
  }

  ngOnInit(): void {
    this.startQuiz();
  }

  startQuiz(): void {
    this.state.set("active");
    this.currentQuestionIndex.set(0);
    this.userAnswers.set(new Array(this.questions().length).fill(null));
    this.score.set(0);
    this.checkedAnswers.set(new Array(this.questions().length).fill(false));
    this.isCorrect.set(new Array(this.questions().length).fill(false));
    this.explanations.set(new Array(this.questions().length).fill(null));
    this.isExplaining.set(new Array(this.questions().length).fill(false));
  }

  selectAnswer(option: string): void {
    this.userAnswers.update((answers) => {
      const newAnswers = [...answers];
      newAnswers[this.currentQuestionIndex()] = option;
      return newAnswers;
    });
  }

  selectMatchingAnswer(termIndex: number, event: Event): void {
    const selectedDefinition = (event.target as HTMLSelectElement).value;
    this.userAnswers.update((answers) => {
      const newAnswers = [...answers];
      let currentMatchingAnswers =
        newAnswers[this.currentQuestionIndex()] || [];

      // Ensure the answer array is initialized for the matching question
      if (!Array.isArray(currentMatchingAnswers)) {
        currentMatchingAnswers = new Array(this.matchingTerms().length).fill(
          null,
        );
      }

      currentMatchingAnswers[termIndex] = selectedDefinition;
      newAnswers[this.currentQuestionIndex()] = currentMatchingAnswers;
      return newAnswers;
    });
  }

  initializeMatchingQuestion(question: MatchingQuestion): void {
    this.matchingTerms.set(question.pairs.map((p) => p.term));
    this.matchingShuffledDefinitions.set(
      [...question.pairs].sort(() => Math.random() - 0.5),
    );
  }

  checkAnswer(questionIndex: number = this.currentQuestionIndex()): void {
    const question = this.questions()[questionIndex];
    const userAnswer = this.userAnswers()[questionIndex];
    let correct = false;

    if (!question || userAnswer === null || userAnswer === undefined) {
      return; // Don't check if there's no answer
    }

    if (question.type === "multiple-choice") {
      correct = userAnswer === question.correctAnswer;
    } else if (question.type === "matching") {
      correct = this.isMatchingCorrect(
        question as MatchingQuestion,
        userAnswer,
      );
    }

    this.isCorrect.update((arr) => {
      const newArr = [...arr];
      newArr[questionIndex] = correct;
      return newArr;
    });

    this.checkedAnswers.update((arr) => {
      const newArr = [...arr];
      newArr[questionIndex] = true;
      return newArr;
    });
  }

  getExplanation(questionIndex: number): void {
    const question = this.questions()[questionIndex];
    const userAnswer = this.userAnswers()[questionIndex];
    const isAnswerCorrect = this.isCorrect()[questionIndex];

    this.isExplaining.update((arr) => {
      const newArr = [...arr];
      newArr[questionIndex] = true;
      return newArr;
    });

    // Initialize empty explanation for streaming
    this.explanations.update((arr) => {
      const newArr = [...arr];
      newArr[questionIndex] = "";
      return newArr;
    });

    try {
      let prompt = "";

      if (question.type === "matching") {
        // Specialized prompt for matching questions
        const matchingQuestion = question as MatchingQuestion;

        // userAnswer is an array of definitions indexed by term position
        const userAnswerArray = userAnswer as string[];

        // Build user's answer pairs
        const userPairs = matchingQuestion.pairs.map((pair, idx) => {
          const userDefinition = userAnswerArray[idx] || "(Chưa chọn)";
          return `${pair.term} - ${userDefinition}`;
        });

        // Build correct pairs
        const correctPairs = matchingQuestion.pairs.map(
          (p) => `${p.term} - ${p.definition}`,
        );

        prompt = `Đây là câu hỏi nối từ (matching). Hãy phân tích câu trả lời của người dùng và giải thích chi tiết.

**Câu hỏi:** "${question.question}"

**Kết quả:** ${isAnswerCorrect ? "CHÍNH XÁC ✓" : "SAI ✗"}

**Các cặp đúng:**
${correctPairs.map((pair, idx) => `${idx + 1}. ${pair}`).join("\n")}

**Câu trả lời của bạn:**
${userPairs.map((pair, idx) => `${idx + 1}. ${pair}`).join("\n")}

**Yêu cầu giải thích:**
${
  isAnswerCorrect
    ? "1. Xác nhận rằng tất cả các cặp nối đều CHÍNH XÁC\n2. Giải thích tại sao mỗi cặp nối là đúng\n3. Kết luận tích cực"
    : "1. Phân tích từng cặp nối - cặp nào đúng, cặp nào sai\n2. Với mỗi cặp SAI, giải thích tại sao sai và cặp đúng phải là gì\n3. Với mỗi cặp ĐÚNG (nếu có), xác nhận nó là chính xác\n4. Kết luận ngắn gọn"
}

**Định dạng câu trả lời bằng Markdown:**
- Sử dụng **bold** để nhấn mạnh các khái niệm quan trọng
- Sử dụng danh sách có đánh số để liệt kê từng cặp
- Giải thích ngắn gọn, dễ hiểu, tập trung vào logic kết nối giữa các khái niệm`;
      } else {
        // Original prompt for multiple-choice questions
        prompt = `Giải thích tại sao câu trả lời cho câu hỏi sau là đúng hoặc sai. Giải thích ngắn gọn, dễ hiểu.

**Câu hỏi:** "${question.question}"

**Kết quả:** ${isAnswerCorrect ? "CHÍNH XÁC ✓" : "SAI ✗"}

**Các lựa chọn:** ${question.options?.join(", ") || "N/A"}

**Câu trả lời của bạn:** "${userAnswer}"

**Đáp án đúng:** "${question.correctAnswer}"

**Yêu cầu:**
1. Giải thích tại sao đáp án đúng là chính xác
2. Nếu chọn sai, giải thích tại sao đáp án không đúng
3. Làm rõ sự khác biệt giữa các đáp án nếu cần

Vui lòng định dạng câu trả lời bằng Markdown, sử dụng **bold**, *italic*, danh sách để làm nổi bật và dễ đọc.`;
      }

      const history: ChatMessage[] = [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ];

      // Use streaming API
      this.geminiService.generateChatResponseStream(history).subscribe({
        next: (chunk) => {
          if (chunk.content) {
            // Append the chunk to the explanation
            this.explanations.update((arr) => {
              const newArr = [...arr];
              newArr[questionIndex] = (newArr[questionIndex] || "") + chunk.content;
              return newArr;
            });
          }
        },
        error: (error) => {
          console.error("Error getting explanation:", error);
          this.explanations.update((arr) => {
            const newArr = [...arr];
            newArr[questionIndex] =
              "Đã có lỗi xảy ra khi tạo giải thích. Vui lòng thử lại.";
            return newArr;
          });
          this.isExplaining.update((arr) => {
            const newArr = [...arr];
            newArr[questionIndex] = false;
            return newArr;
          });
        },
        complete: () => {
          this.isExplaining.update((arr) => {
            const newArr = [...arr];
            newArr[questionIndex] = false;
            return newArr;
          });
        }
      });
    } catch (error) {
      console.error("Error getting explanation:", error);
      this.explanations.update((arr) => {
        const newArr = [...arr];
        newArr[questionIndex] =
          "Đã có lỗi xảy ra khi tạo giải thích. Vui lòng thử lại.";
        return newArr;
      });
      this.isExplaining.update((arr) => {
        const newArr = [...arr];
        newArr[questionIndex] = false;
        return newArr;
      });
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex() < this.questions().length - 1) {
      this.currentQuestionIndex.update((i) => i + 1);
    } else {
      this.finishQuiz();
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update((i) => i - 1);
    }
  }

  finishQuiz(): void {
    let currentScore = 0;
    this.questions().forEach((question, index) => {
      const userAnswer = this.userAnswers()[index];
      if (question.type === "multiple-choice") {
        if (userAnswer === question.correctAnswer) {
          currentScore++;
        }
      } else if (question.type === "matching") {
        if (this.isMatchingCorrect(question, userAnswer)) {
          currentScore++;
        }
      }
    });
    this.score.set(currentScore);
    this.state.set("finished");
  }

  private isMatchingCorrect(
    question: MatchingQuestion,
    userAnswer: string[],
  ): boolean {
    if (!userAnswer || userAnswer.length !== question.pairs.length) {
      return false;
    }
    // All-or-nothing scoring: all pairs must be correct
    return question.pairs.every((pair, index) => {
      // The user answer is an array of definitions, indexed by the original term index.
      return userAnswer[index] === pair.definition;
    });
  }

  restartQuiz(): void {
    this.startQuiz();
  }
}
