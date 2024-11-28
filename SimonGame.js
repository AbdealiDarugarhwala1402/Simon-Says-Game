let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;
let highest_Score = 0;

let btns = ["red","blue","green","yellow"];

let h4 = document.querySelector("h4");
let btnContainer = document.querySelector(".btn-container");
let highScore = document.createElement("h5");

highScore.innerHTML = "Highest Score: " + highest_Score;
btnContainer.insertAdjacentElement('beforebegin',highScore);

document.addEventListener("keypress", function(e) {
    if(!started) {
        console.log("game is started");
        started = true;
        levelUp();
    }
    
});

function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = "Level " + level;
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx) {
    if(gameSeq[idx] === userSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            highestScore();
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h4.innerHTML = `Game over! Your score was <b> ${highest_Score} </b> <br> Press any key to start game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 500);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    }, 500);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

function highestScore() {
    if(level > highest_Score) {
        highest_Score = level;
        highScore.innerHTML = "Highest Score: " + highest_Score;
    }
}
