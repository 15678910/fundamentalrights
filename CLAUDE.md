# fundamentalrights (fundamentalrights.kr)

초등학생부터 헌법 기본권을 배우는 교육용 Astro 정적 사이트. 공통 작업 규칙은 전역 `~/.claude/CLAUDE.md`를 따르고, 여기에는 이 프로젝트에만 해당하는 것을 적는다.

## 수정 금지 영역
- **법령·기본권 설명 내용**: `src/content/`(rights, lessons, glossary, topics, issues 등)의 본문과 `src/pages/bill*.astro`의 조문. 디자인 작업에서는 바꾸지 않는다. 정확성이 디자인보다 먼저다.
- **콘텐츠 스키마**: `src/content/config.ts`, `src/lib/categories.ts`. 바꾸면 `tests/content-schema.test.ts`가 깨진다.
- **`public/`의 untracked PDF**: 로컬 참고자료다. 커밋하지 않는다. `git add`는 항상 파일을 지정해서 한다(`git add .` · `-A` 금지).
- `docs/참고자료/`는 gitignore 대상(외부 원문). 커밋하지 않는다.

## 배포 (중요)
- **`main`에 push하면 GitHub Actions가 자동으로 빌드·배포한다.** push는 곧 공개 배포다.
- 소유자가 화면을 승인하기 전에는 push·병합을 하지 않는다. 작업은 새 브랜치에서 한다. auto-merge는 켜지 않는다.

## 명령
- 개발 서버: `npm run dev`
- 시험: `npm test` (vitest) — 출력은 `| tail -n 20`
- 빌드: `npm run build` (`astro build` + `pagefind`) — 통과 전에는 완료라고 하지 않는다.
- 타입 점검: `npm run check`

## 디자인 기준 (메인 페이지 1차, 커밋 dbe33ec)
- 글꼴 Pretendard Variable(부분 폰트), 한글 대체는 Apple SD Gothic Neo → Malgun Gothic.
- 기본 글자 크기 18px(`html` 112.5% × `--font-scale`), 행간 1.75. 본문은 18px 이상.
- 보조 글자색 `--muted: #475569`(대비 확보). 색은 CSS 변수(`--fg`, `--muted`, `--brand`, `--accent`)로만 쓰고 고대비 모드(`:root[data-contrast="high"]`)에서도 깨지지 않게 한다.
- 한글 본문 영역에는 `word-break: keep-all; overflow-wrap: break-word`.
- 버튼·누를 곳은 높이 48px 이상. 영역 사이 간격은 약 3.2rem.
- 움직임은 절제하고 `prefers-reduced-motion`을 지킨다. 3D·영상 스크롤은 쓰지 않는다.
- 출처·이용 조건을 모르는 AI 생성 이미지는 쓰지 않는다.

## 확인 방법 (디자인 변경 시)
- 개발 서버에서 375px(휴대폰)과 768px(태블릿) 폭에 **가로 넘침이 없는지** 직접 확인한다.
- 한 번에 한 페이지만 고친다. 끝나면 소유자에게 화면 승인을 받는다.

## 자주 발생하는 실수
- (발견하면 여기에 한 줄씩 추가)
