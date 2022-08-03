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
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `        
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    }: ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${movement}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUsernames = accounts => {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcPrintBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `$${balance}`;
};
calcPrintBalance(account1.movements);

const calcDisplaySummary = movements => {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `$${incomes}`;
};
calcDisplaySummary(account1.movements);

const out = movements => {
  const expenses = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `$${Math.abs(expenses)}`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};
out(account1.movements);

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

/* // Map Method returns a new array with a new method ; does not mutate the array
const euroToUsd = 1.1;

//Code below both do the same thing; functional programming Methods with callback functions
const movementsUSD = movements.map(function (movements) {
  return movements * euroToUsd;
});

//code below is the same as code above but it is an arrow function
//Which you prefer is based on preference; code below is cleaner and short but not as
//readable as code above
const movementsUSDArrow = movements.map(movements => movements * euroToUsd);

// Not as conventional in modern javascript
const movementsUSDfor = [];
for (const movements of movements) {
  movementsUSD.push(movements * euroToUsd);
}

//Map method also has an index
const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    mov
  )}`;
});


console.log(movementsDescriptions); */

/* //Filter method
const deposits = movements.filter(mov => {
  return mov > 0;
});

const withdrawals = movements.filter(mov => {
  return mov < 0;
});

console.log(deposits);
console.log(withdrawals);

//reduce method
//Accumulator -> snowball/sum
const balance = movements.reduce(
  (accumulator, current, i, arr) => accumulator + current,
  0
);

console.log(balance);

//Maximum value
const maxValue = movements.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  }

  return curr;
}, 0);

console.log(maxValue);
 */

/* const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = arr => {
  const humanYearsConversion = arr.map((age) =>
     age <= 2 ? age*2 : 16+age*4)
     .filter((age) => age <= 18)
     .reduce((acc, curr, i, arr) => (acc+curr)/arr.length);
  
  return humanYearsConversion;
  }

console.log(calcAverageHumanAge(testData1));
console.log(calcAverageHumanAge(testData2)); */

const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
