# 기본권 학습터 (Fundamental Rights)

**https://fundamentalrights.kr/**

대한민국 헌법 제2장(국민의 권리와 의무, 제10조~제39조)의 기본권을 **초등학생부터 성인까지**
누구나 자기 수준에서 이해할 수 있도록 **쉬운 말 · 보통 · 자세히** 세 단계로 설명하는 정적 교육 웹사이트입니다.

독일의 [Grundrechte-Fibel](https://www.grundrechte-fibel.de/)과 [bpb](https://www.bpb.de/)의
쉬운 정치 교육 자료에서 영감을 받았고, 쟁점·토론 자료는 [보이텔스바흐 합의](https://ko.wikipedia.org/wiki/보이텔스바흐_합의)의
세 원칙(교화 금지·논쟁성 재현·학습자 지향)을 따릅니다.

## 함께 만들기 (기여 안내)

이 프로젝트는 오픈소스로 운영됩니다. 개발 지식이 없어도 참여할 수 있습니다.

- **오류 제보**: 잘못된 내용, 바뀐 전화번호·법령, 오탈자 → [GitHub 이슈](https://github.com/15678910/fundamentalrights/issues)에 남겨 주세요.
- **콘텐츠 수정 제안**: 권리 설명·수업안·워크시트는 모두 `src/content/` 아래 Markdown 파일입니다.
  GitHub 웹에서 파일을 열어 ✏️(편집) 버튼으로 바로 수정 제안(Pull Request)을 보낼 수 있습니다.
- **감수 참여**: 헌법 연구자·법조인·현직 교사의 감수를 기다립니다. 이슈로 연락해 주세요.
- **정기 점검**: 상담전화·관련 법령 등 현행 정보는 연 2회(3월·9월) 점검하는 것을 원칙으로 합니다.

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

1. `astro.config.mjs`의 `site`를 본인 주소로 변경하세요.
   - 커스텀 도메인·사용자/조직 사이트: `base: "/"` (현재 설정, `public/CNAME`에 도메인 명시)
   - 프로젝트 사이트로 포크해 쓰는 경우: `site`를 `https://<사용자명>.github.io`로, `base`를 `"/<저장소명>/"`으로 변경하고 `public/CNAME`을 삭제
2. GitHub 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정
3. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동 빌드·배포합니다.

## 라이선스

- **콘텐츠**(권리 설명, 쟁점, 수업안, 워크시트, 포스터, 만화, 삽화 등):
  [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko) — 출처(기본권 학습터)를 밝히면
  비영리 목적으로 자유롭게 복사·배포·수정할 수 있습니다.
- **코드**(사이트 소스): [MIT License](./LICENSE)
- 헌법 조문 원문은 공공 저작물이며, 인용된 판례·통계는 각 원출처를 따릅니다.

## ⚠️ 정확성 및 면책

본 사이트의 설명은 **학습용 요약**이며 법적 효력이 있는 해석이 아닙니다.
헌법 **원문**은 [국가법령정보센터](https://www.law.go.kr/)·위키문헌 등 권위 자료에서 확인해 옮겼으나,
쉬운 말/보통/자세히 설명문은 초안 단계입니다. **배포 전 전문가(법학자·교사)의 감수를 권장합니다.**
정확한 내용은 헌법 원문과 공식 자료를 확인하세요.
