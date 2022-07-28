'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {

  containerMovements.innerHTML = '';

  movements.forEach(function (movement, index) {

    const type = movement > 0 ? 'deposit' : 'withdrawal'

    const html = `        
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${index + 1}: ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${movement}</div>
  </div>
  `;

  containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

//This method returns a new array with the extracted parts, does not mutate the original array
// with slice you can create an a start and end paremeters
// arr.slice(startIndex, endIndex)
// You can also use a negative startIndex to get the last element of an array -1
arr.slice(2)

//The splice method DOES CHANGE the original array, very important difference
//Other than that it works the same
arr.splice(2);

// The reverse method reverses the order of the array
//It DOES mutate the original array
arr2.reverse();

//Concat, this method is used to concat two separate arrays and 
const arr2 = ['j', 'i', 'h', 'g', 'f'];
const letters = arr.concat(arr2);

//Join two differnt arrays with a separate in between each element
letters.join('-'); */

/* const arr = [23, 11, 64];

//Both return the same value
//You can use the at method to get the last element in the array or do method chaining
arr[0];
arr.at[0];

// getting the last array element
arr[arr.length-1];
arr.slice(-1)[0];
arr.at(-1);

//The at method also works on strings
 */
/* 
//for of
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//forEach, you cannot break out of a forEach loop
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index+1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
  }
});
 */
//Map
/* currencies.forEach(function (value, key, map) {
  console.log(value, key);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EURO']);
currenciesUnique.forEach(function (value, _) {
  console.log(value);
});
 */

