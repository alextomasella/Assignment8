let questionBlocks = document.querySelectorAll(".question-block");


let userAnswers = {};


questionBlocks.forEach(function(block, index) {
  
  let buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      
      buttons.forEach(function(btn) {
        btn.classList.remove("selected");
      });
      
      button.classList.add("selected");

      let value = Number(button.dataset.value);

      let questionKey = `question-${index + 1}`;
      userAnswers[questionKey] = value;

      console.log(userAnswers);
    });
  });
});

let showResultBtn = document.getElementById("show-result");
let resultContainer = document.getElementById("result-container");
let resultText = document.getElementById("result-text");

showResultBtn.addEventListener("click", function() {
  let total = Object.values(userAnswers).reduce((a, b) => a + b, 0);

  let result = "";
  if (total <= 5) {
    result = "Winter";
  } else if (total <= 8) {
    result = "Spring";
  } else if (total <= 10) {
    result = "Fall";
  } else {
    result = "Summer";
  }

  resultContainer.style.display = "block";
  resultText.textContent = `The season you are is ${result}!`;
});