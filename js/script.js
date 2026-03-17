// Confirm that the script is properly connected
console.log("script.js connected!");

/*
Select all question blocks on the page.
Each question block contains answer buttons.
*/
const questionBlocks = document.querySelectorAll(".question-block");

// Select the "Show Results" button
const showResultBtn = document.getElementById("show-result");

// Select the container where results will appear
const resultContainer = document.getElementById("result-container");

// Select the paragraph where result text will be inserted
const resultText = document.getElementById("result-text");

/*
Loop through each question block
to add click functionality to the answer buttons
*/
questionBlocks.forEach(block => {

    // Select all answer buttons inside this specific question
    const buttons = block.querySelectorAll(".answer-btn");

    // Add click event to each button
    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Remove "selected" class from all buttons in this block
            buttons.forEach(btn => {
                btn.classList.remove("selected");
            });

            // Add "selected" class to the clicked button
            button.classList.add("selected");
        });

    });

});

/*
Function that calculates and displays the final result
*/
function displayResult() {

    // Variable to store total points
    let totalPoints = 0;

    // Loop through each question block
    questionBlocks.forEach(block => {

        // Find the selected answer inside this question
        const selected = block.querySelector(".selected");

        // If the user selected an answer, add its points
        if (selected) {
            totalPoints += parseInt(selected.dataset.points);
        }
    });

    // Variable to store final result message
    let result;

    /*
    Determine final result:
    - If most answers were 1 → Romantic Comedy
    - If most answers were 2 → Action Movie
    */
    if (totalPoints <= 3) {
        result = "You are a Romantic Comedy! 💕 You value emotions, love, and meaningful connections.";
    } else {
        result = "You are an Action Movie! 🎬 You love excitement, adventure, and high-energy experiences.";
    }

    // Insert result text into the page
    resultText.textContent = result;

    // Make result container visible
    resultContainer.style.display = "block";
}

// Add click event to the Show Results button
showResultBtn.addEventListener("click", displayResult);