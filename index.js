let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highest_Score = 0;

const btns = ["red", "blue", "green", "yellow"];
const h4 = document.querySelector("h4");
const btnContainer = document.querySelector(".btn-container");

// Add highest score display
const highScore = document.createElement("h5");
highScore.innerHTML = "Highest Score: " + highest_Score;
btnContainer.insertAdjacentElement("beforebegin", highScore);

// Keypress event listener
document.addEventListener("keypress", () => {
    if (!started) {
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = "Level " + level;

    // Generate a random button and add to sequence
    const randomIndex = Math.floor(Math.random() * 4); // Fixed: 0 to 3 range
    const randomColor = btns[randomIndex];
    const randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);

    console.log("Game Sequence:", gameSeq);

    // Flash the random button
    gameFlash(randomBtn);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        // If user completes the sequence, proceed to next level
        if (userSeq.length === gameSeq.length) {
            highestScore();
            setTimeout(levelUp, 1000);
        }
    } else {
        // Game over
        h4.innerHTML = `Game Over! Your score was <b>${highest_Score}</b><br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";

        // Clear red background after delay
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);

        reset();
    }
}

function btnPress() {
    const btn = this;
    const userColor = btn.getAttribute("id"); // Fixed: Scoped variable declaration
    userSeq.push(userColor);

    // Flash the button
    userFlash(btn);

    // Check the answer
    checkAns(userSeq.length - 1);
}

// Attach click event to buttons
const allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => btn.addEventListener("click", btnPress));

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 500);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

function highestScore() {
    if (level > highest_Score) {
        highest_Score = level;
        highScore.innerHTML = "Highest Score: " + highest_Score;
    }
}
