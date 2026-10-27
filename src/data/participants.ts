// 참여 신청 설정. 인원 수·닉네임은 신청이 들어오면 Firebase(무료 요금제)에서 자동으로 불러온다.
// apiKey는 웹에 공개되도록 만든 식별용 키이며 비밀이 아니다. 접근 제한은 firebase/firestore.rules가 맡는다.
export const firebase = {
  projectId: "fundamentalrights-kr",
  apiKey: "AIzaSyBCuuI2aUn1uPEHxF8iIW40Xdjrn9VDaJc",
};

export interface JoinField { key: string; label: string }
// key는 firebase/firestore.rules의 validField 목록과 같아야 한다.
export const fields: JoinField[] = [
  { key: "legal", label: "헌법 연구자·법조인" },
  { key: "teacher", label: "현직 선생님" },
  { key: "researcher", label: "연구자·대학원생" },
];

// 동물·식물 그림(이모지). firebase/firestore.rules의 validAvatar 목록과 같아야 한다.
export const avatars: { icon: string; name: string }[] = [
  { icon: "🐻", name: "곰" }, { icon: "🦊", name: "여우" }, { icon: "🐰", name: "토끼" },
  { icon: "🐧", name: "펭귄" }, { icon: "🦉", name: "부엉이" }, { icon: "🐢", name: "거북이" },
  { icon: "🐬", name: "돌고래" }, { icon: "🦋", name: "나비" }, { icon: "🌻", name: "해바라기" },
  { icon: "🌳", name: "나무" }, { icon: "🌸", name: "벚꽃" }, { icon: "🍀", name: "클로버" },
  { icon: "🌵", name: "선인장" }, { icon: "🍄", name: "버섯" },
  { icon: "🐶", name: "강아지" },
  { icon: "🐱", name: "고양이" },
  { icon: "🐼", name: "판다" },
  { icon: "🐨", name: "코알라" },
  { icon: "🦁", name: "사자" },
  { icon: "🐯", name: "호랑이" },
  { icon: "🐸", name: "개구리" },
  { icon: "🐵", name: "원숭이" },
  { icon: "🐘", name: "코끼리" },
  { icon: "🦒", name: "기린" },
  { icon: "🦔", name: "고슴도치" },
  { icon: "🐝", name: "꿀벌" },
  { icon: "🐞", name: "무당벌레" },
  { icon: "🦜", name: "앵무새" },
  { icon: "🐳", name: "고래" },
  { icon: "🦆", name: "오리" },
  { icon: "🐙", name: "문어" },
  { icon: "🦄", name: "유니콘" },
  { icon: "🌲", name: "소나무" },
  { icon: "🌴", name: "야자수" },
  { icon: "🌿", name: "풀잎" },
  { icon: "🍁", name: "단풍잎" },
  { icon: "🌷", name: "튤립" },
  { icon: "🌹", name: "장미" },
  { icon: "🌼", name: "데이지" },
  { icon: "🌺", name: "히비스커스" },
];

// 스팸 방어(Firebase App Check + reCAPTCHA v3). 사이트 키는 공개용이다. 비워 두면 사용하지 않는다.
export const appCheck = {
  appId: "1:447116632174:web:0a599b62376d5d973b467f",
  siteKey: "",
};

// 신청 알림(텔레그램). Google Apps Script 웹 앱 주소(공개 주소)를 넣는다. 비워 두면 보내지 않는다.
// 봇 토큰은 Apps Script 안에만 두고 이 저장소에는 넣지 않는다. 코드: docs/telegram-notify.gs
export const notify = {
  url: "",
};
