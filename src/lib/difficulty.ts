export type DifficultyKey = "easy" | "normal" | "detailed";

export interface Difficulty {
  key: DifficultyKey;
  label: string;   // 화면 표시
  heading: string; // Markdown 안의 ## 제목과 매칭
}

export const DIFFICULTIES: Difficulty[] = [
  { key: "easy", label: "쉬운 말", heading: "쉬운 말" },
  { key: "normal", label: "보통", heading: "보통" },
  { key: "detailed", label: "자세히", heading: "자세히" },
];

export const DEFAULT_DIFFICULTY: DifficultyKey = "easy";

export function isDifficulty(value: string): value is DifficultyKey {
  return DIFFICULTIES.some((d) => d.key === value);
}
