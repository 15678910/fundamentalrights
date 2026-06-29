export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;       // 정답 인덱스
  explanation: string;
}

export interface QuizResult {
  correct: boolean;
  explanation: string;
}

export function gradeQuiz(q: QuizQuestion, selected: number): QuizResult {
  return { correct: selected === q.answer, explanation: q.explanation };
}
