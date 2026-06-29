import { describe, it, expect } from "vitest";
import { DIFFICULTIES, DEFAULT_DIFFICULTY, isDifficulty } from "../src/lib/difficulty";

describe("difficulty", () => {
  it("정확히 3단계를 순서대로 정의한다", () => {
    expect(DIFFICULTIES.map((d) => d.key)).toEqual(["easy", "normal", "detailed"]);
  });

  it("기본값은 easy(쉬운 말)이다", () => {
    expect(DEFAULT_DIFFICULTY).toBe("easy");
  });

  it("유효한 난이도 키를 판별한다", () => {
    expect(isDifficulty("normal")).toBe(true);
    expect(isDifficulty("expert")).toBe(false);
  });
});
