(function wrapSections(){
  const map = { "쉬운 말":"easy", "보통":"normal", "자세히":"detailed" };
  const article = document.querySelector("article");
  if (!article) return;
  const nodes = Array.from(article.childNodes);
  let current = null;
  nodes.forEach((node) => {
    if (node.nodeType === 1 && node.tagName === "H2" && map[node.textContent.trim()]) {
      current = document.createElement("section");
      current.setAttribute("data-difficulty-section", map[node.textContent.trim()]);
      node.replaceWith(current);
      current.appendChild(node);
    } else if (current) {
      current.appendChild(node);
    }
  });
})();
const KEY = "difficulty";
const VALID = ["easy","normal","detailed"];
function apply(level){
  document.querySelectorAll("[data-difficulty-section]").forEach((el)=>{ el.hidden = el.getAttribute("data-difficulty-section") !== level; });
  document.querySelectorAll("[data-difficulty-btn]").forEach((b)=>{ b.setAttribute("aria-pressed", String(b.getAttribute("data-difficulty-btn") === level)); });
}
(function init(){
  const saved = localStorage.getItem(KEY);
  const level = saved && VALID.includes(saved) ? saved : "easy";
  apply(level);
  document.querySelectorAll("[data-difficulty-btn]").forEach((b)=>{
    b.addEventListener("click", ()=>{ const lvl=b.getAttribute("data-difficulty-btn"); localStorage.setItem(KEY,lvl); apply(lvl); });
  });
})();
