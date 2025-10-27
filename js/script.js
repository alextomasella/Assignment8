let buttons = document.querySelectorAll(".answer-btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Previous highlight button code
    buttons.forEach(function(btn) {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
    
    
    let mood = button.getAttribute("data-mood");
    let output = document.getElementById("output-message");
    
    // Now we can write different responses based on the mood
    if (mood === "happy") {
      output.textContent = "Yay! Glad you're feeling happy today 🎉";
    } else if (mood === "tired") {
      output.textContent = "Take it easy—you’ve earned some rest 😴";
    } else if (mood === "angry") {
      output.textContent = "Deep breaths. Tomorrow is a new day 😤";
    } else if (mood === "confused") {
      output.textContent = "Confusion is a sign of growth 🤔";
    }
  });
});


// 1. Create an empty object that will store user data
let userAnswers = {}
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Highlight button code not shown
    	
    // 2. Get the data using the dataset attribute 
    let buttonID = button.dataset.buttonid
    let response = button.dataset.mood;
    // 3. Store the data in the object
    userAnswers[buttonID] = response;
    console.log(userAnswers); // See current stored answers
    
    // Mood implementaiton code now sown	
  });
});