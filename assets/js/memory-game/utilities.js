

// Unlock the board to start the game
function startGame() {
    lockBoard = false;
}

// Countdown Timer
function startTimer() {
    let startCountdown = setInterval(() => {
        // Time Left text
        countdown -= 1;
        timeLeft.textContent = countdown;
        if (countdown < 0) {
            countdown = 0;
            clearInterval(startCountdown);
            countdownBoard.textContent = "Time's Up!"
            endGame();
        }
    }, 1000);

    // Progress bar timer
    /* Based upon the following source: "https://www.coding.academy/blog/how-to-create-a-smooth-animated-progress-bar" */
    progressBar.animate({
        width: "0%"
    }, animateSpeed)
}

// End game 
function endGame() {
    lockBoard = true;
    // Check for win
    if (totalMatches === 8) {
        winGameModal.style.display = "block";
        continueBtn.addEventListener("click", function(){
            window.location.replace("game-two-menu.html");
        });
    }
    // Check for loss
    else {
        loseGameModal.style.display = "block";
        replayBtn.addEventListener("click", function(){
            window.location.reload();
        });
        quitBtn.addEventListener("click", function(){
            window.location.replace("index.html");
        })
    }
}