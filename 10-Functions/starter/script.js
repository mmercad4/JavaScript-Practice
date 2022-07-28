'use strict';
/* 
const bookings = [];

//Setting default parameters
const createBooking = function (
    flightNum, 
    numPassengers = 1,
    price = 199 * numPassengers
) {
    const booking = {
        flightNum, 
        numPassengers, 
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

//How to skip a parameter because undefined means there is no parameter so it will result to the defualt value
createBooking('LH123', undefined, 1000); */

/* const flight = 'LH234';
const marco = {
  name: 'Marco',
  passport: 27479852475,
};

const checkedIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 27479852475) {
    alert('Checked In');
  } else {
    ('Wrong Passport!');
  }
};

checkedIn(flight, marco);

console.log(flight);
console.log(marco);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(marco);

checkedIn(flight, marco);
 */

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-Order function because it takes in a function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}` );
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord); */

/* const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Marco');
greeterHey('Jonas');

greet('Hello')('Marco');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Marco');
 */

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Marco Mercado');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa.bookings);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//First-Class Functions, we can take a function and store it to a new variable that is also the book function
const book = lufthansa.book;

//Call method will make the "this" keyword refer to the first argument passed in
//In this case the function will be using the this keyword in reference to eurowings
book.call(eurowings, 23, 'Marco Mercado');
book.call(lufthansa, 23, 'Marco Mercado');

console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 23, 'Marco Mercado');

console.log(swiss);

//Apply method and call are almost the same execept the apply method does not receieve a list of arguments and instead
//It will take an array argument

const flightData = [583, 'George Cooper'];

//Code below both do the same thing
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

console.log(swiss);

//It does not call the book function but it creates a new function where the this keyword is binded to eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(2642, 'Marco Mercado');

//We can set in arguments with the bind method (the code below now only needs a name)
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Erin Christner');

console.log(eurowings);

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Set the this keyword to the airline object instead of the DOM
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

//Both lines below are the same result
addTax.bind(0.23, 200);
console.log(addVAT(200));



//Practice
const addTax = rate => {
  return function (value) {
    console.log(value + value * rate);
  };
};


const addVAT = addTax(.23);


addVAT(200); */

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: c++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question} \n ${this.options.join('\n')}\n(Wriite option number)`
    );

    if (Number(answer) == 0) {
      this.answers[0] = this.answers[0] + 1;
    } else if (answer == 1) {
      this.answers[1] = this.answers[1] + 1;
    } else if (answer == 2) {
      this.answers[2] = this.answers[2] + 1;
    } else if (answer == 3) {
      this.answers[3] = this.answers[3] + 1;
    } else {
      console.log('Invalid input, please try again');
    }
    this.displayResults('string');
    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
 */

/* //Can be called again and ran again
const runOnce = function () {
  console.log('This will never run again.');
};

//Carefully study the syntax, this function will only be called once and then it can never run again
// IIFE (Immediately Invoked Function Expressions)
(function () {
  console.log('This will never run again');
})();

//Another way of writing an IIFE
(() => {
  console.log('This will also never run again');
})();
 */

/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//This connection is what we called closure because
//A function always has access to the variable envrionment of the execution
//context in which it was created even after that execution context is gone
//The closure is then basically this variable envrionment attached to this function
//Exactly as it was at the time and place that the function was created
const booker = secureBooking();

booker();
booker();
booker();
booker();
 */


/* //example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f(); */

/* // Example 2 
const boardPassengers = function (n, wait) {
  const perGroup = n/3;

  setTimeout(function(){
    console.log(`We are no boarding all ${n} passengers`);
    console.log(`There are three groups, each with ${n} passengers`);
  }, wait*1000)

  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 30); */

/* (function () {
  const header = document.querySelector('h1');
  header.style.color='red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color ='blue'
  })
})();
 */