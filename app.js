function choiceRock() {
    PickComputerMove();
    playerGame('Rock')
}

function choicePaper() {
    PickComputerMove();
    playerGame('Paper')
}

function choiceScissors() {
    PickComputerMove();
    playerGame('Scissors')

}


function resetScore() {
    score.wins = 0;
    score.loose = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreDetail();

}


function PickComputerMove() {
    const randNum = Math.random();

    let computerChoice = '';
    if (randNum >= 0 && randNum < 1 / 3) {
        computerChoice = 'Rock';
    }
    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        computerChoice = 'Paper';
    }
    else if (randNum >= 2 / 3 && randNum < 1) {
        computerChoice = 'Scissors';
    }
    return computerChoice
}


let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        loose: 0,
        ties: 0
    };

}

function playerGame(playerMove) {
    let computerChoice = PickComputerMove();

    let result = '';
    if (playerMove === 'Rock') {
        if (computerChoice === 'Rock') {
            result = 'Tie.'
        }
        else if (computerChoice === 'Paper') {
            result = 'You lose.'
        }
        else if (computerChoice === 'Scissors') {
            result = 'You win.'
        }
    }

    if (playerMove === 'Paper') {
        if (computerChoice === 'Rock') {
            result = 'You win.'
        }
        else if (computerChoice === 'Paper') {
            result = 'Tie.'
        }
        else if (computerChoice === 'Scissors') {
            result = 'You lose.'
        }
    }

    if (playerMove === 'Scissors') {

        if (computerChoice === 'Rock') {
            result = 'You lose.'
        }
        else if (computerChoice === 'Paper') {
            result = 'You win.'
        }
        else if (computerChoice === 'Scissors') {
            result = 'Tie.'
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.loose += 1;
    }
    else {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.res').innerHTML = result;
    document.querySelector('.choice-of-two').innerHTML = `You ${playerMove} - ${computerChoice} Computer`;
    updateScoreDetail();

    // alert(`Your choose ${playerMove}. Computer choose ${computerChoice}. ${result}
    // wins: ${score.wins}, looses: ${score.loose}, Ties: ${score.ties}.`);
}

function updateScoreDetail() {
    document.querySelector('.game-res').innerHTML = `wins: ${score.wins}, looses: ${score.loose}, Ties: ${score.ties}.`;
}






