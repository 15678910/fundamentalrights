const root = document.documentElement;
(function restore(){
  if (localStorage.getItem("contrast") === "high") root.dataset.contrast = "high";
  const scale = localStorage.getItem("fontScale");
  if (scale) root.style.setProperty("--font-scale", scale);
})();
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-a11y]");
  if (!t) return;
  const action = t.dataset.a11y;
  if (action === "contrast") {
    const on = root.dataset.contrast === "high";
    if (on) { delete root.dataset.contrast; localStorage.removeItem("contrast"); }
    else { root.dataset.contrast = "high"; localStorage.setItem("contrast", "high"); }
  }
  if (action === "font-up" || action === "font-down") {
    const cur = parseFloat(getComputedStyle(root).getPropertyValue("--font-scale")) || 1;
    const next = Math.min(1.5, Math.max(0.9, cur + (action === "font-up" ? 0.1 : -0.1)));
    root.style.setProperty("--font-scale", String(next));
    localStorage.setItem("fontScale", String(next));
  }
});
