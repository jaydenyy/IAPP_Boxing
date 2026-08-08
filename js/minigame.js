const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const bestText = document.getElementById("bestScore");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let time = 30;

let gameRunning = false;

let timer;
let mover;

let best = localStorage.getItem("boxingBest") || 0;
bestText.textContent = best;

function randomPosition(){
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    target.style.left = x + "px";
    target.style.top = y + "px";
    target.style.transform = "none";
}

target.addEventListener("click",function(){
    if(!gameRunning) return;
    score++;
    scoreText.textContent = score;
});

function startGame(){
    if(gameRunning) return;
    gameRunning = true;

    score = 0;
    time = 10;

    scoreText.textContent = score;
    timeText.textContent = time;

    randomPosition();

    timer = setInterval(function(){
        time--;
        timeText.textContent = time;

        if(time <= 0){
            endGame();
        }
    },1000);

    mover = setInterval(function(){
        randomPosition();
    },2500);

}

function endGame(){
    clearInterval(timer);
    clearInterval(mover);
    gameRunning = false;

    if(score > best){
        best = score;
        localStorage.setItem("boxingBest",best);
        bestText.textContent = best;
    }
    alert("Game Over!\n\nScore: " + score);
    timeText.textContent = 10;
}

startBtn.addEventListener("click",startGame);

restartBtn.addEventListener("click",function(){
    clearInterval(timer);
    clearInterval(mover);
    if(gameRunning){
        endGame();
    }
    randomPosition();
});