const readlineSync = require('readline-sync');

const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  sp: 'spock',
  l: 'lizard',
};

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors'],
};

const WINS_NEEDED = 3;

const LINE = '-------------------------------------------------------';

function prompt (message) {
  console.log(`=> ${message}`);
}

function displayWelcomeMessage() {
  console.clear();
  prompt('Welcome to Rock Paper Scissors Lizard Spock!');
  prompt(LINE);
  prompt(`First to win ${WINS_NEEDED} rounds wins the match!`);
  prompt(LINE);
}

function noWinner(scoreBoard) {
  return scoreBoard.playerScore < WINS_NEEDED &&
         scoreBoard.computerScore < WINS_NEEDED;
}

function displayScoreBoard(scoreBoard) {
  prompt(`Player Score: ${scoreBoard.playerScore}`);
  prompt(`Computer Score: ${scoreBoard.computerScore}`);
  prompt(`Ties: ${scoreBoard.ties}`);
  prompt(LINE);
}

function getPlayerChoice() {
  prompt('Please enter r for Rock, p for Paper, s for scissors, l for Lizard, sp for spock.');
  return readlineSync.question().toLowerCase();
}

function validPlayerChoice(playerChoice) {
  return Object.keys(VALID_CHOICES).includes(playerChoice);
}

function calculateComputerChoice() {
  let index = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  return VALID_CHOICES[Object.keys(VALID_CHOICES)[index]];
}

function displayChoices(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice} and the computer chose ${computerChoice}.`);
}

function calculateRoundWinner(playerChoice, computerChoice) {
  if (WINNING_COMBOS[playerChoice].includes(computerChoice)) {
    return 'player';
  } else if (playerChoice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function displayRoundWinner(roundWinner) {
  if (roundWinner === 'computer') {
    prompt('The computer won this round.');
  } else if (roundWinner === 'player') {
    prompt('Congratulations, you won this round!');
  } else {
    prompt("It's a tie!");
  }
  prompt(LINE);
}

function iterateScoreBoard(scoreBoard, roundWinner) {
  if (roundWinner === 'computer') {
    scoreBoard.computerScore += 1;
  } else if (roundWinner === 'player') {
    scoreBoard.playerScore += 1;
  } else {
    scoreBoard.ties += 1;
  }
  scoreBoard.roundsPlayed += 1;
}

function calculateMatchWinner(scoreBoard) {
  return scoreBoard.playerScore === WINS_NEEDED ? 'player' : 'computer';
}

function displayMatchWinner(matchWinner, scoreBoard) {
  switch (matchWinner) {
    case 'player':
      prompt (`Congratulations, you won the match! You beat the computer in ${scoreBoard.roundsPlayed} rounds.`);
      break;
    case 'computer':
      prompt (`You lost the match. The computer beat you in ${scoreBoard.roundsPlayed} rounds.`);
      break;
  }
}

function getPlayAgain() {
  prompt('Would you like to play again? Enter y for yes or n for no.');
  return readlineSync.question().toLowerCase();
}

function validPlayAgain(playAgain) {
  return ['y', 'n'].includes(playAgain);
}

function displayGoodbyeMessage(matchesPlayed) {
  prompt(`Thank you for playing Rock, Paper, Scissors, Lizard, Spock! You played ${matchesPlayed} ${matches(matchesPlayed)}.`);
}

function matches(matchesPlayed) {
  return matchesPlayed > 1 ? 'matches' : 'match';
}

displayWelcomeMessage();

let matchesPlayed = 0;

let playAgain = 'y';

while (playAgain === 'y') {

  let scoreBoard = {
    roundsPlayed: 0,
    playerScore: 0,
    computerScore: 0,
    ties: 0,
  };

  if (matchesPlayed > 0) {
    console.clear();
  }

  while (noWinner(scoreBoard)) {

    displayScoreBoard(scoreBoard);

    let playerChoice = getPlayerChoice();

    while (!validPlayerChoice(playerChoice)) {
      playerChoice = getPlayerChoice();
    }

    playerChoice = VALID_CHOICES[playerChoice];

    let computerChoice = calculateComputerChoice();

    console.clear();

    displayChoices(playerChoice, computerChoice);

    let roundWinner = calculateRoundWinner(playerChoice, computerChoice);

    displayRoundWinner(roundWinner);

    iterateScoreBoard(scoreBoard, roundWinner);

  }

  matchesPlayed += 1;

  let matchWinner = calculateMatchWinner(scoreBoard);

  displayScoreBoard(scoreBoard);

  displayMatchWinner(matchWinner, scoreBoard);

  playAgain = getPlayAgain();
  while (!validPlayAgain(playAgain)) {
    playAgain = getPlayAgain();
  }

}

displayGoodbyeMessage(matchesPlayed);