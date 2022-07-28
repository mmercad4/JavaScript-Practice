'use strict';

//initalize variables

// Create a random number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// function to display the message in the message class box
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//event listener for when a user clicks on the "check" button
document.querySelector('.check').addEventListener('click', function () {
  // Grab the input from the .guess class and initialize it to the variable guess
  const guess = Number(document.querySelector('.guess').value);

  //if there is no guess then display the no input message
  if (!guess) {
    displayMessage('No Number Inputted');
  }
  // if the guess is correct then they win the game
  else if (guess === secretNumber) {
    //display correct number
    displayMessage('Correct Number!');

    //show the correct number, change the color to green, and widen the .number class
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //if there is a new highscore then change the highscore to the new highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // if the guess is incorrect then display too high or too low
  else if (guess !== secretNumber) {
    // if they have not lost the game then do the following
    if (score > 1) {
      //Use a ternary operator to display too high or too low based on if the number is too high or too low
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      //reduce score by one
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //display that they lost the game and change the score to 0
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//resets the game to the initial state
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
