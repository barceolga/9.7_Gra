//CONSTANTS AND VARIABLES FOR game
/*jshint esversion: 6*/
const newGameBtn = document.getElementById('js-newGameButton');
const pickRock = document.getElementById('js-playerPick_rock'),
      pickPaper = document.getElementById('js-playerPick_paper'),
      pickScissors = document.getElementById('js-playerPick_scissors');
const newGameElem = document.getElementById('js-newGameElement'),
      pickElem = document.getElementById('js-playerPickElement'),
      resultsElem = document.getElementById('js-resultsTableElement');
const playerPointsElem = document.getElementById('js-playerPoints'),
      playerNameElem = document.getElementById('js-playerName'),
      computerPointsElem = document.getElementById('js-computerPoints');
const playerPickElem = document.getElementById('js-playerPick'),
      computerPickElem = document.getElementById('js-computerPick'),
      playerResultElem = document.getElementById('js-playerResult'),
      computerResultElem = document.getElementById('js-computerResult');
let gameState = 'notStarted'; //3 STATES //started //ended //notStarted
let player = {
    name: '',
    score: 0
  };
let computer = {
    score: 0
  };
newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });

// SET GAME STRUCTURE

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameElem.style.display = 'block';
        newGameBtn.innerText = 'Play again';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
      break;
    case 'nonStarted':
      break;
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
      break;
  }
}
//setGameElements();

//START NEW GAME

function newGame() {
  player.name = prompt('Please enter your name', 'Player name');
  if (player.name) {
    player.score = 0;
    computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
  }
  else {
    alert('We need a name for a player');
  }
}
//newGameBtn.addEventListener('click', newGame);

//PLAYER PICK

//pickRock.addEventListener('click', function() { playerPick('rock'); });
//pickPaper.addEventListener('click', function() { playerPick('paper'); });
//pickScissors.addEventListener('click', function() { playerPick('scissors'); });

//COMPUTER PICK

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick){
  var computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;

  checkRoundWinner(playerPick, computerPick);
  setGamePoints();
  checkGameWinner();
  setGameElements();
}
//WHO WON THE ROUNHD

function checkRoundWinner(playerPick,computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

  if (playerPick == computerPick) {
    winnerIs = 'noone';

    } else if (
    (computerPick == 'rock' && playerPick == 'scissors') ||
    (computerPick == 'scissors' && playerPick == 'paper') ||
    (computerPick == 'paper' && playerPick == 'rock')) {

      winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
          playerResultElem.innerHTML = "Win!";
          player.score++;
        console.log(player.score);

      } else if (winnerIs == 'computer') {
          computerResultElem.innerHTML = "Win!";
          computer.score++;
        console.log(computer.score);
      }
}

//SET  GAME SCORE FOR COMPUTER AND PLAYER ON WEBSITE

function setGamePoints() {
  playerPointsElem.innerText = player.score;
  computerPointsElem.innerText = computer.score;
}

// END GAME

function checkGameWinner() {
    if (player.score == 10) {
        alert("You have won!!Congratulations!!!");
        gameState = 'ended';
        player.score = 0;
        computer.score = 0
    } else if (computer.score == 10) {
        alert("Computer has won!!! I hope you'll have more luck next time.");
        gameState = 'ended';
        player.score = 0;
        computer.score = 0
    }
    return gameState;
  }
setGameElements();
