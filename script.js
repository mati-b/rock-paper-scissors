let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) ;
    switch (randomNumber) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSORS'
            break;
    }
}


function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        
        roundWinner = 'tie';
    }

    if  ((playerSelection === 'ROCK' && computerSelection ==='SCISSORS') || 
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
        )
    {  
        playerScore++;
        roundWinner = 'player';
        
    }

    if ((computerSelection === 'ROCK' && playerSelection ==='SCISSORS') || 
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        
        computerScore++;
        roundWinner = 'computer';
    } 

    updateScoreMessage(roundWinner, playerSelection, computerSelection);


}




function isGameOver() {
    return playerScore === 5 || computerScore === 5
}



// intefaz

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScoreP = document.getElementById('playerScore');
const computerScoreP = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const compSign = document.getElementById('compSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');


rockBtn.addEventListener('click', () => handleClick('ROCK'));
paperBtn.addEventListener('click', () => handleClick('PAPER'));
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndGameModal);



function handleClick(playerSelection) {
    if (isGameOver()) {
      openEndgameModal();
      return
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (isGameOver()) {
        openEndgameModal();
        setFinalMessage();
      }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            playerSign.textContent = '✊' ;
            break;
        case 'PAPER':
            playerSign.textContent = '🤚';
            break;
        case 'SCISSORS':
            playerSign.textContent = '✌';
            break;
    }

    switch (computerSelection) {
        case 'ROCK':
            compSign.textContent = '✊' ;
            break;
        case 'PAPER':
            compSign.textContent = '🤚';
            break;
        case 'SCISSORS':
            compSign.textContent = '✌';
            break;
    }

}

function updateScore() {
    
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!";
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You win!';
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!';
    }

    playerScoreP.textContent = `Player: ${playerScore}`;
    computerScoreP.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
            playerSelection
        )} beats ${computerSelection.toLowerCase()}`
        return
    }

    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
            playerSelection
        )} is beaten by ${computerSelection.toLowerCase()}`
        return;
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
    )} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndGameModal() {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMessage() {
    return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost!')
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Select one:';
    scoreMessage.textContent = 'First to score 5 win';
    playerScoreP.textContent = 'Player: 0';
    computerScoreP.textContent = 'Computer: 0';
    playerSign.textContent = '❔';
    compSign.textContent = '❔';
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}




