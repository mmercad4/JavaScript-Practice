'use strict';
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;
let diceRoll = 0;
let activePlayer = 1;
let playing = true;

const playerOneScoreEl = document.querySelector('#score--0');
const playerTwoScoreEl = document.querySelector('#score--1');
const playerOneCurrentScoreEl = document.querySelector('#current--0');
const playerTwoCurrentScoreEl = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');

const resetGameState = () => {
    playing = true; 
    playerOneScore = 0;
    playerTwoScore = 0
    playerOneCurrentScore = 0;
    playerTwoCurrentScore = 0;
    playerOneCurrentScoreEl.textContent = playerOneCurrentScore;
    playerTwoCurrentScoreEl.textContent = playerTwoCurrentScore;
    playerOneScoreEl.textContent = playerOneScore;
    playerTwoScoreEl.textContent = playerTwoScore;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    diceEl.classList.add('hidden');
}

const addCurrentScore = function () {
  if (activePlayer === 1) {
    playerOneCurrentScore += diceRoll;
    playerOneCurrentScoreEl.textContent = playerOneCurrentScore;
  } else {
    playerTwoCurrentScore += diceRoll;
    playerTwoCurrentScoreEl.textContent = playerTwoCurrentScore;
  }
};

const switchPlayer = () => {
  if (activePlayer != 1) {
    activePlayer = 1;
    playerTwoCurrentScoreEl.textContent = 0;
    playerTwoCurrentScore = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  } else {
    activePlayer = 2;
    playerOneCurrentScoreEl.textContent = 0;
    playerOneCurrentScore = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }
};

const didPlayerWin = () => {
  if (playerOneScore >= 100 || playerOneScore + playerOneCurrentScore >= 100) {
    document.querySelector('.player--0').classList.add('player--winner');
    playing = false;
  } else if (
    playerTwoScore >= 100 ||
    playerTwoScore + playerTwoCurrentScore >= 100
  ) {
    document.querySelector('.player--1').classList.add('player--winner');
    playing = false;
  }
};

playerOneScoreEl.textContent = 0;
playerTwoScoreEl.textContent = 0;

diceEl.classList.add('hidden');

btnRollDice.addEventListener('click', function () {
  if (playing) {
    diceRoll = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;

    if (diceRoll === 1) {
      switchPlayer();
    } else {
      addCurrentScore();
    }

    didPlayerWin();
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (activePlayer === 1) {
      playerOneScore += playerOneCurrentScore;
      playerOneScoreEl.textContent = playerOneScore;
      playerOneCurrentScoreEl.textContent = 0;
      playerOneCurrentScore = 0;
      activePlayer = 0;
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    } else {
      playerTwoScore += playerTwoCurrentScore;
      playerTwoScoreEl.textContent = playerTwoScore;
      playerTwoCurrentScoreEl.textContent = 0;
      playerTwoCurrentScore = 0;
      activePlayer = 1;
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    }
  }
});

btnReset.addEventListener('click', resetGameState);