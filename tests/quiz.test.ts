import { describe, it, expect } from "vitest";
import { gradeQuiz, type QuizQuestion } from "../src/lib/quiz";

const q: QuizQuestion = {
  question: "인간의 존엄은 누구에게 있을까요?",
  options: ["모든 사람", "어른만"],
  answer: 0,
  explanation: "모든 사람에게 똑같이 있어요.",
};

describe("gradeQuiz", () => {
  it("정답 선택 시 correct=true", () => {
    expect(gradeQuiz(q, 0)).toEqual({ correct: true, explanation: q.explanation });
  });
  it("오답 선택 시 correct=false", () => {
    expect(gradeQuiz(q, 1)).toEqual({ correct: false, explanation: q.explanation });
  });
  it("범위 밖 선택은 오답 처리", () => {
    expect(gradeQuiz(q, 5).correct).toBe(false);
  });
});
