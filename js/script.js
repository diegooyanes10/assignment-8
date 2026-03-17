
console.log("script.js connected!");


let questionBlocks = document.querySelectorAll(".question-block");


let showResultBtn = document.getElementById("show-result");


let resultContainer = document.getElementById("result-container");
let resultText = document.getElementById("result-text");


questionBlocks.forEach(function(block) {

   
    let buttons = block.querySelectorAll(".answer-btn");

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

           
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            
            button.classList.add("selected");

        });

    });

});


function displayResult() {

    let totalPoints = 0;

   
    questionBlocks.forEach(function(block) {

        let selected = block.querySelector(".selected");

        if (selected) {
            
            let points = selected.getAttribute("data-points");
            totalPoints += parseInt(points);
        }

    });

    let result;

    if (totalPoints <= 3) {
        result = "You are a Romantic Comedy! 💕 You value emotions and love.";
    } else {
        result = "You are an Action Movie! 🎬 You love excitement and adventure.";
    }


    resultText.textContent = result;

    resultContainer.style.display = "block";
}

showResultBtn.addEventListener("click", displayResult);