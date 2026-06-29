# 우리 헌법 기본권 (Fundamental Rights)

대한민국 헌법 제2장(국민의 권리와 의무, 제10조~제39조)의 기본권을 **초등학생부터 성인까지**
누구나 자기 수준에서 이해할 수 있도록 **쉬운 말 · 보통 · 자세히** 세 단계로 설명하는 정적 교육 웹사이트입니다.

독일의 [Grundrechte-Fibel](https://www.grundrechte-fibel.de/)과 [bpb](https://www.bpb.de/)의
쉬운 정치 교육 자료에서 영감을 받았습니다.

## 기능

- 권리별 **난이도 3단계 전환**(쉬운 말/보통/자세히) + 헌법 **원문** 펼침
- 범주별(포괄·평등·자유·참정·청구·사회권 + 의무) 권리 카드 홈
- 권리별 **퀴즈**, **용어 사전**, **정적 검색**(Pagefind)
- **접근성**: 고대비 모드, 글자 크기 조절, 키보드 탐색, 인쇄 최적화

## 개발

```bash
npm install
npm run dev      # 개발 서버 (검색은 빌드 후에만 동작)
npm run check    # 타입 + 콘텐츠 스키마 검증
npm test         # 단위 테스트 (vitest)
npm run build    # 정적 빌드 + Pagefind 검색 인덱스 생성 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 콘텐츠 구조

각 권리는 `src/content/rights/<조문>-<제목>.md` 한 파일로 관리합니다.
프런트매터에 `article·title·category·order·original(원문)·terms·quiz`를 담고,
본문에 `## 쉬운 말`, `## 보통`, `## 자세히` 세 섹션을 둡니다.
스키마는 `src/content/config.ts`에 정의되어 있어 빌드 시 자동 검증됩니다.

## 배포 (GitHub Pages)

1. `astro.config.mjs`의 `site`를 본인 GitHub Pages 주소로 변경하세요.
   - 프로젝트 사이트: `https://<사용자명>.github.io` (현재 `base: "/fundamentalrights/"` 유지)
   - 사용자/조직 사이트 또는 커스텀 도메인: `base`를 `"/"`로 변경
2. GitHub 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정
3. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동 빌드·배포합니다.

## ⚠️ 정확성 및 면책

본 사이트의 설명은 **학습용 요약**이며 법적 효력이 있는 해석이 아닙니다.
헌법 **원문**은 [국가법령정보센터](https://www.law.go.kr/)·위키문헌 등 권위 자료에서 확인해 옮겼으나,
쉬운 말/보통/자세히 설명문은 초안 단계입니다. **배포 전 전문가(법학자·교사)의 감수를 권장합니다.**
정확한 내용은 헌법 원문과 공식 자료를 확인하세요.
