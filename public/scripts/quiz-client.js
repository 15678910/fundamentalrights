document.querySelectorAll("[data-quiz]").forEach((quiz)=>{
  const answer = Number(quiz.dataset.answer);
  const result = quiz.querySelector("[data-quiz-result]");
  quiz.querySelectorAll("[data-quiz-option]").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
      const selected = Number(btn.dataset.quizOption);
      const correct = selected === answer;
      result.hidden = false;
      result.textContent = (correct ? "⭕ 정답! " : "❌ 아쉬워요. ") + (quiz.dataset.explanation || "");
      result.style.color = correct ? "#16a34a" : "#dc2626";
    });
  });
});
