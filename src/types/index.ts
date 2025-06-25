export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type QuizMode = 'codeToMeaning' | 'meaningToCode';

export interface StatusCode {
  code: number;
  meaning: string;
  description: string;
  difficulty: Difficulty;
}

export interface Question {
  statusCode: StatusCode;
  options: string[];
  correctAnswer: string;
}

export interface GameState {
  difficulty: Difficulty;
  mode: QuizMode;
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  questions: Question[];
}
