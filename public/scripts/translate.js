/* 시험판: 구글 웹사이트 번역 위젯으로 전체 화면 번역.
   - 언어를 고르기 전에는 구글 스크립트를 불러오지 않습니다.
   - 고른 언어는 googtrans 쿠키에 저장하고 새로 고침해 적용합니다. */
(function () {
  var COOKIE = "googtrans";
  function getLang() {
    var m = document.cookie.match(/(?:^|;\s*)googtrans=\/ko\/([^;]+)/);
    return m && /^[A-Za-z-]{2,8}$/.test(m[1]) ? m[1] : "";
  }
  // 구글 위젯도 같은 쿠키를 도메인 지정 방식(.호스트)으로 따로 저장하므로
  // 바꾸거나 지울 때는 세 가지 변형을 모두 같은 값으로 처리해야 한다.
  function setCookie(value) {
    var exp = value ? "" : "expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    var base = COOKIE + "=" + value + ";path=/;SameSite=Lax;" + exp;
    document.cookie = base;
    var host = location.hostname;
    if (host.indexOf(".") > -1 && !/^[0-9.]+$/.test(host)) {
      document.cookie = base + "domain=" + host + ";";
      document.cookie = base + "domain=." + host + ";";
    }
  }
  var current = getLang();
  var items = document.querySelectorAll(".lang-item");
  items.forEach(function (b) {
    if ((b.dataset.lang || "") === current) b.setAttribute("aria-current", "true");
    b.addEventListener("click", function () {
      var code = b.dataset.lang;
      setCookie(code ? "/ko/" + code : "");
      location.reload();
    });
  });
  var drop = document.querySelector(".lang-drop");
  if (drop) {
    document.addEventListener("click", function (e) { if (drop.open && !drop.contains(e.target)) drop.open = false; });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") drop.open = false; });
  }
  if (!current) return;

  var bar = document.createElement("div");
  bar.className = "translate-bar notranslate no-print";
  bar.setAttribute("translate", "no");
  bar.innerHTML = '<span>기계 번역 화면입니다. 법 조문은 한국어 원문을 확인하세요. · Machine translation. Check the original Korean for legal text.</span> <button type="button">한국어로 보기 · Original</button>';
  bar.querySelector("button").addEventListener("click", function () {
    setCookie("");
    location.reload();
  });
  document.body.insertBefore(bar, document.body.firstChild);

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({ pageLanguage: "ko", autoDisplay: false }, "google_translate_element");
  };
  var s = document.createElement("script");
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  s.async = true;
  document.head.appendChild(s);
})();
