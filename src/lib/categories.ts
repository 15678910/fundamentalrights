export interface Category {
  key: string;
  label: string;
  color: string; // 카드/태그 색
  order: number;
}

export const CATEGORIES: Category[] = [
  { key: "comprehensive", label: "포괄적 기본권", color: "#7c3aed", order: 1 },
  { key: "equality",      label: "평등권",        color: "#2563eb", order: 2 },
  { key: "freedom",       label: "자유권",        color: "#0891b2", order: 3 },
  { key: "participation", label: "참정권",        color: "#16a34a", order: 4 },
  { key: "claim",         label: "청구권",        color: "#ca8a04", order: 5 },
  { key: "social",        label: "사회권",        color: "#db2777", order: 6 },
  { key: "duty",          label: "국민의 의무",    color: "#64748b", order: 7 },
];

export const CATEGORY_KEYS = CATEGORIES.map((c) => c.key);

export function getCategory(key: string): Category | undefined {
  return CATEGORIES.find((c) => c.key === key);
}
