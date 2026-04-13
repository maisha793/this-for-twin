// =====================
// PAGE 1 (Logical Quiz)
// =====================
document.addEventListener("DOMContentLoaded", function () {

  let score = 0;

  let correct = ["C", "E", "B"]; // example correct answers
  let questions = document.querySelectorAll(".question");
  let result = document.getElementById("result");

  // option click select
  document.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", function () {
      let parent = this.parentElement;

      parent.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));

      this.classList.add("selected");
    });
  });

  // result check button
  document.getElementById("submit").addEventListener("click", function () {

    score = 0;

    questions.forEach((q, i) => {
  let selected = q.querySelector(".option.selected");

  if (selected) {
    let match = selected.innerText.match(/\((.*?)\)/);

    if (match) {
      let ans = match[1];

      if (ans.toUpperCase() === correct[i].toUpperCase()) {
        score++;
      }
    }
  }
});
    result.innerHTML = `Score: ${score} / ${correct.length}`;
  });

});


// =====================
// PAGE 2 (Radio Quiz)
// =====================

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector(".submit-btn");

  btn.addEventListener("click", function () {

    const answers = {
      q1: "F",
      q2: "A",
      q3: "C",
      q4: "B",
      q5: "D"
    };

    let score = 0;

    for (let key in answers) {

      const selected = document.querySelector(`input[name="${key}"]:checked`);

      if (selected) {
        if (selected.value === answers[key]) {
          score++;
        }
      }

    }

    alert(` Score: ${score} / 5`);

  });

});