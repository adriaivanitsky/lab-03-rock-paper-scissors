export function didUserWin(userChoice, computerChoice){
    if(userChoice === computerChoice){return 'tied'}
    else if(userChoice === 'rock' && computerChoice === 'scissors'){return 'win'}
    else if(userChoice === 'scissors' && computerChoice === 'paper'){return 'win'}
    else if(userChoice === 'paper' && computerChoice === 'rock'){return 'win'}
    else{return 'lose'}
};

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random() * 2)];
}