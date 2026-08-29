# 마스코트 표준 디자인 명세 (만화 패널 보정용)

만화 패널 속 세모·네모·동그라미는 아래 표준 골격을 따라야 한다.
**자세·표정·소품·배경·말풍선은 그대로 두고**, 아래 항목만 표준에 맞게 고친다.

## 공통
- 몸 외곽선: `stroke="#1f2937"` `stroke-width="3"` (패널 내 배율에 따라 2.5~3.5 허용)
- 안경: 두 원(반지름 약 7, `fill="none" stroke="#1f2937" stroke-width="2"`) + 가운데 다리(`h4`).
  눈동자는 안경 원 안의 검은 원(r≈3). **세 캐릭터 모두 안경을 반드시 쓴다.**
  - 표정 변형 허용: 놀란 눈 = 안경 원 안 눈동자를 크게/작게, 화난 눈 = 안경 위에 눈썹 선 추가,
    감은 눈 = 안경 원 안에 곡선. 안경 테 자체는 항상 유지.
- 볼터치: `fill="#e11d2a" opacity="0.3"` 원 2개 (표정상 어울리면 유지/추가, 슬픈 장면은 생략 가능)
- 빨강은 모두 `#e11d2a` (기존 #ef4444 등은 #e11d2a로 통일)

## 세모 (삼각형)
- 몸: 흰 삼각형 `fill="#ffffff"`, 꼭짓점 위에 **빨간 머리카락 3가닥** (짧은 선 3개, stroke #e11d2a w3)
- 팔: 검정(#1f2937) 선 + 끝에 검정 점(원 r≈4) 손
- 다리: 검정 선 2개 + **검정 타원 발** (ellipse rx≈6 ry≈3.5)

## 네모 (사각형)
- 몸: 연회색 둥근 사각형 `fill="#f3f4f6"` rx≈10
- 머리: 윗변에 **빨간 지그재그 곱슬 3봉우리** `M.. q6 -12 12 -4 q6 -12 12 -4 q6 -10 12 -2`
- 팔: **빨간색**(#e11d2a) 곡선
- 다리: **빨간색** 곡선 + **빨간 둥근 사각형 발** (rect rx3, 살짝 회전)

## 동그라미 (원)
- 몸: 흰 원 `fill="#ffffff"`
- 머리: 정수리에 **빨간 곱슬 한 가닥** `q-6 -12 4 -16 q-8 0 -2 8` 형태
- 팔: 검정 선 + 검정 점 손
- 다리: 검정 선 2개 + 검정 타원 발

## 표준 원본 코드 (참고 — MascotScene 좌표계)

세모:
```
<path d="M70 40 L44 104 L96 104 Z" fill="#ffffff" stroke="#1f2937" stroke-width="3" stroke-linejoin="round"/>
<g stroke="#e11d2a" stroke-width="3" stroke-linecap="round"><path d="M70 40 L64 26"/><path d="M70 40 L72 24"/><path d="M70 40 L78 28"/></g>
<g fill="none" stroke="#1f2937" stroke-width="2"><circle cx="61" cy="74" r="7"/><circle cx="79" cy="74" r="7"/><path d="M68 74 h4"/></g>
<circle cx="61" cy="74" r="3" fill="#1f2937"/><circle cx="79" cy="74" r="3" fill="#1f2937"/>
```

네모:
```
<rect x="166" y="56" width="54" height="54" rx="10" fill="#f3f4f6" stroke="#1f2937" stroke-width="3"/>
<path d="M174 56 q6 -12 12 -4 q6 -12 12 -4 q6 -10 12 -2" fill="none" stroke="#e11d2a" stroke-width="3" stroke-linecap="round"/>
<path d="M166 80 q-12 2 -16 12" fill="none" stroke="#e11d2a" stroke-width="3" stroke-linecap="round"/>  (팔)
<rect x="172" y="126" width="14" height="7" rx="3" fill="#e11d2a" transform="rotate(-12 179 129)"/>  (발)
```

동그라미:
```
<circle cx="310" cy="84" r="30" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<path d="M310 54 q-6 -12 4 -16 q-8 0 -2 8" fill="none" stroke="#e11d2a" stroke-width="3" stroke-linecap="round"/>
<path d="M282 84 L268 80" stroke="#1f2937" stroke-width="3" stroke-linecap="round"/><circle cx="266" cy="80" r="4" fill="#1f2937"/>  (팔)
```

## 금지 사항
- 말풍선·대사·배경·소품·구도 변경 금지
- viewBox 변경 금지 (0 0 320 260)
- 새 캐릭터 추가/삭제 금지
- `text-anchor="middle"` 제거 금지
