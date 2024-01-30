import { DOMSelectors } from "./DOM";

document.getElementById('start-button').addEventListener('click', startGame);

let score = 0;
let move;

function startGame(){
    resetGame();
    move = setInterval(moveMole, 1000);
}

function resetGame(){
    score = 0;
    clearInterval(move);
    DOMSelectors.container.innerHTML = '<button onclick="whackMole()">Whack me!</button>';
    updateScore();
}

function moveMole(){
    const containerWidth = DOMSelectors.container.clientWidth;
    const containerHeight = DOMSelectors.container.clientHeight;

    const maxX = containerWidth - DOMSelectors.moleButton.clientWidth;
    const maxY = containerHeight - DOMSelectors.moleButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    DOMSelectors.moleButton.style.left = randomX + 'px';
    DOMSelectors.moleButton.style.top = randomY + 'px';

    DOMSelectors.moleButton = document.querySelector('#game-container button');
    DOMSelectors.moleButton.onclick = function () {
        whackMole();
        moveMole();
    };
}

function whackMole() {
  score++;
  updateScore();
}

function updateScore() {
    const scoreElement = document.getElementById('score-display');
    if (!scoreElement) {
        DOMSelectors.container.innerHTML += '<p id="score-display">Score: ' + score + '</p>';
    } else {
        scoreElement.textContent = 'Score: ' + score;
    }
}
//grid of potential moles
//get it to appear in random spots
//get it to wait a few seconds

