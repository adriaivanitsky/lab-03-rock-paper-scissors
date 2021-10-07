import { didUserWin, getRandomThrow } from './utils.js';

// import functions and grab DOM elements
const button = document.getElementById('button');
const result = document.getElementById('result');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const tied = document.getElementById('tied'); 
const error = document.getElementById('error');
// initialize global state
let winCount = 0;
let loseCount = 0;
let tiedCount = 0;
// set event listeners 

button.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected){
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    const userChoice = selected.value;
    const computerChoice = getRandomThrow();

    if (didUserWin(userChoice, computerChoice) === 'tied'){
        tiedCount++; tied.textContent = tiedCount;
        result.textContent = 'You tied';
    } else if (didUserWin(userChoice, computerChoice) === 'win'){
        winCount++; win.textContent = winCount;
        result.textContent = 'You win!';
    } else {
        loseCount++; lose.textContent = loseCount;
        result.textContent = 'You lose :(';
    }
  
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

