/**
 * 참여 신청 → 텔레그램 알림 중계 (Google Apps Script)
 *
 * 설치: script.google.com → 새 프로젝트 → 이 코드를 붙여 넣기
 * → 프로젝트 설정(톱니바퀴) → 스크립트 속성에 두 개 추가
 *     BOT_TOKEN = BotFather가 준 토큰
 *     CHAT_ID   = 내 채팅 번호
 * → 배포 → 새 배포 → 유형 '웹 앱' → 실행 사용자 '나', 액세스 '모든 사용자' → 배포
 * → 나온 '웹 앱 URL'을 src/data/participants.ts 의 notify.url 에 넣는다.
 *
 * 토큰은 이 파일에 쓰지 말고 반드시 '스크립트 속성'에만 둔다.
 */
function doPost(e) {
  try {
    var p = PropertiesService.getScriptProperties();
    var token = p.getProperty("BOT_TOKEN");
    var chat = p.getProperty("CHAT_ID");
    if (!token || !chat) return ContentService.createTextOutput("no-config");

    // 도배 방지: 1분에 20건까지만 전달
    var cache = CacheService.getScriptCache();
    var n = Number(cache.get("n") || 0);
    if (n >= 20) return ContentService.createTextOutput("limited");
    cache.put("n", String(n + 1), 60);

    var d = JSON.parse(e.postData.contents);
    var cut = function (v, max) { return String(v == null ? "" : v).slice(0, max); };
    var text =
      "새 참여 신청\n" +
      "분야: " + cut(d.field, 40) + "\n" +
      "닉네임: " + cut(d.nickname, 30) + " " + cut(d.avatar, 8) + "\n" +
      "공개: " + cut(d.consent, 20) + "\n" +
      "연락처: " + cut(d.contact, 100);

    UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/sendMessage", {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify({ chat_id: chat, text: text }),
      muteHttpExceptions: true,
    });
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error");
  }
}
