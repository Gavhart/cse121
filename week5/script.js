// Constants
const NUM_MOLES = 70;
const GAME_DURATION = 30; // in seconds

// Variables
let score = 0;
let molesWhacked = 0;
let gameStarted = false;
let gameIntervalId;
let difficultyLevel = 'easy';


// DOM Elements
const scoreElement = document.getElementById('score');
const moleContainer = document.querySelector('.game-container');

// Start the game
function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    score = 0;
    molesWhacked = 0;
    updateScore();
    moleContainer.innerHTML = '';
    gameIntervalId = setInterval(placeRandomMole, 1000);
    setTimeout(endGame, GAME_DURATION * 1000);
  }
}

// End the game
function endGame() {
  clearInterval(gameIntervalId);
  gameStarted = false;
  alert('Game over! Your score is ' + score);
}

// Update the score on the page
function updateScore() {
  scoreElement.textContent = score;
}

// Handle mole click event
function moleClickHandler(event) {
  const mole = event.target;
  if (gameStarted && mole.classList.contains('mole') && !mole.classList.contains('whacked')) {
    mole.classList.add('whacked');
    score++;
    molesWhacked++;
    updateScore();
    setTimeout(() => {
      moleContainer.removeChild(mole);
    }, 500);
  }
}
// Place a random mole on the page
function placeRandomMole() {
  if (molesWhacked === NUM_MOLES) {
    endGame();
    return;
  }

  const mole = document.createElement('div');
  mole.classList.add('mole');

  const containerSize = moleContainer.getBoundingClientRect();
  const maxLeft = containerSize.width - 75; // Subtract mole width
  const maxTop = containerSize.height - 75; // Subtract mole height

  const leftPos = Math.floor(Math.random() * maxLeft);
  const topPos = Math.floor(Math.random() * maxTop);

  mole.style.left = leftPos + 'px';
  mole.style.top = topPos + 'px';

  moleContainer.appendChild(mole);

  setTimeout(() => {
    moleContainer.removeChild(mole);
  }, 1000); // Adjust the duration as desired (in milliseconds)
}


// Get a random position within the game container
function getRandomPosition() {
  const containerSize = moleContainer.getBoundingClientRect();
  const maxPos = Math.min(containerSize.width, containerSize.height) - 50; // Subtract mole size
  return Math.floor(Math.random() * maxPos);
}
function changeDifficulty() {
  difficultyLevel = document.getElementById('difficulty').value;
}
function placeRandomMole() {
  if (molesWhacked === NUM_MOLES) {
    endGame();
    return;
  }
  
  const mole = document.createElement('div');
  mole.classList.add('mole');
  mole.style.left = getRandomPosition() + 'px';
  mole.style.top = getRandomPosition() + 'px';
  
  moleContainer.appendChild(mole);
  
  setTimeout(() => {
    moleContainer.removeChild(mole);
  }, getMoleDuration()); // Adjust the duration based on difficulty
}
function getMoleDuration() {
  let baseDuration = 1000; // Default duration
  
  switch (difficultyLevel) {
    case 'easy':
      baseDuration = 1000; // Adjust as desired
      break;
    case 'medium':
      baseDuration = 800; // Adjust as desired
      break;
    case 'hard':
      baseDuration = 600; // Adjust as desired
      break;
    // Add more cases for additional difficulty levels if desired
  }
  
  return baseDuration;
}
const MAX_HIGH_SCORES = 5; // Adjust as desired

function getHighScores() {
  const storedScores = localStorage.getItem('highScores');
  if (storedScores) {
    return JSON.parse(storedScores);
  }
  return [];
}
function saveHighScores(scores) {
  localStorage.setItem('highScores', JSON.stringify(scores));
}
function displayHighScores() {
  const highScores = getHighScores();
  const highScoreBoard = document.getElementById('highScoreBoard');
  highScoreBoard.innerHTML = '';
  
  for (let i = 0; i < highScores.length; i++) {
    const scoreItem = document.createElement('li');
    scoreItem.textContent = highScores[i];
    highScoreBoard.appendChild(scoreItem);
  }
}
function endGame() {
  clearInterval(gameIntervalId);
  gameStarted = false;
  
  const highScores = getHighScores();
  highScores.push(score);
  highScores.sort((a, b) => b - a); // Sort scores in descending order
  highScores.splice(MAX_HIGH_SCORES); // Keep only the top scores
  
  saveHighScores(highScores);
  
  alert('Game over! Your score is ' + score);
  displayHighScores(); // Update the high score board
}
function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    score = 0;
    molesWhacked = 0;
    updateScore();
    moleContainer.innerHTML = '';
    gameIntervalId = setInterval(placeRandomMole, 1000);
    setTimeout(endGame, GAME_DURATION * 1000);
    startCountdown();
  }
}
function startCountdown() {
  let timeLeft = GAME_DURATION;

  const countdownIntervalId = setInterval(() => {
    timeLeft--;
    document.getElementById('timeLeft').textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(countdownIntervalId);
    }
  }, 1000);
}
// Handle mole click event
function moleClickHandler(event) {
  const mole = event.target;
  if (gameStarted && mole.classList.contains('mole') && !mole.classList.contains('whacked')) {
    mole.classList.add('whacked');
    score++;
    molesWhacked++;
    updateScore();
    setTimeout(() => {
      moleContainer.removeChild(mole);
    }, 500);
  } else if (gameStarted && !mole.classList.contains('mole')) {
    score--; // Decrease the score if clicked on empty space
    updateScore();
  }
}




