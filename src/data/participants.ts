// 참여 신청 현황. 운영자가 신청서를 확인한 뒤 직접 갱신한다.
// formUrl: 구글 폼 "보내기 > 퍼가기"의 src 주소. 비워 두면 "준비 중"으로 표시된다.
// nicknames: 공개에 동의한 사람만 적는다.
export interface JoinField { key: string; label: string; count: number; nicknames: string[] }
export const formUrl: string = "";
export const fields: JoinField[] = [
  {
    "key": "legal",
    "label": "헌법 연구자·법조인",
    "count": 0,
    "nicknames": []
  },
  {
    "key": "teacher",
    "label": "현직 선생님",
    "count": 0,
    "nicknames": []
  },
  {
    "key": "researcher",
    "label": "연구자·대학원생",
    "count": 0,
    "nicknames": []
  }
];
