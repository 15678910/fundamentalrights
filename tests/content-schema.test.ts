import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

describe("샘플 권리 본문", () => {
  const md = readFileSync("src/content/rights/10-인간의-존엄.md", "utf-8");
  it("세 난이도 섹션을 모두 포함한다", () => {
    expect(md).toContain("## 쉬운 말");
    expect(md).toContain("## 보통");
    expect(md).toContain("## 자세히");
  });
});
