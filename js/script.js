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
    });
  });
});


let showResultBtn = document.getElementById("show-result");
let resultContainer = document.getElementById("result-container");
let resultText = document.getElementById("result-text");

