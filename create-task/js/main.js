import { DOMSelectors } from "./DOM";


let score = 0;
let moleHoles = [];
let moveInterval;

document.getElementById('start-button').addEventListener('click', startGame);


function updateScore() {
    const scoreDisplay = DOMSelectors.scoreDisplay;
    scoreDisplay.textContent = 'Score: ' + score;
}

function startGame(){
    resetGame();
    createMoleHoles(5);
    moveInterval = setInterval(moveHole, 1000); 
}

function resetGame(){
    score = 0;
    clearInterval(moveInterval);
    DOMSelectors.scoreDisplay.textContent = '';
    moleHoles = [];
    DOMSelectors.holeContainer.innerHTML = '';
}

function createMoleHoles(count) {
    for (let i = 0; i < count; i++) {
        const moleHole = document.createElement('div');
        moleHole.className = 'hole';
        moleHole.id = 'hole-' + i;
        moleHole.onclick = () => whackMole(moleHole);
        moleHoles.push(moleHole);
        DOMSelectors.holeContainer.appendChild(moleHole);
    }
}

function moveHole() {
    resetMoles();
    const randomIndex = Math.floor(Math.random() * moleHoles.length);
    const moleHole = moleHoles[randomIndex];
    moleHole.classList.add('mole');
}

function resetMoles() {
    moleHoles.forEach(moleHole => {
        moleHole.classList.remove('mole');
        moleHole.onclick = () => whackMole(moleHole);
    });
}

function whackMole(clickedMoleHole) {
    if (clickedMoleHole.classList.contains('mole')) {
        clickedMoleHole.classList.remove('mole');
        score++;
        updateScore();
    }
}





