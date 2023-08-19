document.getElementById("start").addEventListener("click", startGame);

function startGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;

    while (true) {
        const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert("Please enter a valid number between 1 and 10.");
            continue;
        }

        attempts++;

        if (userGuess === randomNumber) {
            alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
            break;
        } else if (userGuess < randomNumber) {
            alert("Try a higher number.");
        } else {
            alert("Try a lower number.");
        }
    }
}
