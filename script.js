let playerScore = 0;
let computerScore = 0;
let rounds;

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

    let won = false;

    let player = playerSelection.toUpperCase()
    let computer = computerSelection.toUpperCase()

    if (player === computer) {
        console.log('----------------')
        return 'tie';
    }

    else if(
        (player === 'ROCK' && computer ==='SCISSORS') || 
        (player === 'SCISSORS' && computer === 'PAPER') ||
        (player === 'PAPER' && computer === 'ROCK')
        )
    {
        won = true;  
        playerScore++;
        
    }
    else if ((computerSelection === 'ROCK' && playerSelection ==='SCISSORS') || 
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        
        computerScore++;
    } else {
        return 'INGRESE DATOS VALIDOS'
    }

    /*
    if (
        (computerSelection === 'ROCK' && playerSelection ==='SCISSORS') || 
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
        )
    {
        won = false;
        computerScore++;
        
    }
    */


    console.log('--------------------')
    return (won == true) ? `You Won! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`
}

function game() {
    rounds = prompt('select how many rounds would you play')
    
    // Play ROUNDS number of rounds
    for (let i = 0; i < rounds; i++) {
        let result; // Result string of the current game

        // Keep playing until it isn't a tie
        do {
            let playerSelection; // Stores the move selection of the player

            // Keep prompting the user for a move until it is a valid move
            do {
                // If the user cancels the prompt, then reprompt
                do {
                    playerSelection = prompt(" Choose: 'Rock', 'Paper', or 'Scissors.'").toUpperCase();    
                } while (playerSelection === null);
            } while (
                playerSelection !== "ROCK" && 
                playerSelection !== "PAPER" &&
                playerSelection !== "SCISSORS"
            );
            
            // Plays a round of Rock, Paper, Scissors
            result = playRound(playerSelection, getComputerChoice())
            
            // If the game is a tie, Display a message, and continue with the next iteration
            if (result === null) {
                console.log("It's a TIE! Replay the round.")
                continue
            }
            
            // Displays the result and the score
            console.log(`${result}`)
            console.log(`Your score is ${playerScore} while the computer's score is ${computerScore}.`)
        } while (result === null);
    }

    // Displays the winner and the score
    if (playerScore > computerScore) {
        console.log('--------------------')
        console.log("YOU WON THE GAME!")
        console.log(`You got ${playerScore} points, while the computer had ${computerScore}.`)
    } else {
        console.log('--------------------')
        console.log("You lost the game!")
        console.log(`You got ${playerScore} points, while the computer had ${computerScore}.`)
    }
}







game()



