'use strict';

/* // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return console.log([
      this.starterMenu[startIndex],
      this.mainMenu[mainIndex],
    ]);
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    return console.log(mainIngredient, otherIngredients);
  },

  /*   restaurant.orderDelivery({
    time: '22:30',
    address: '280 Shuping Mill Rd, Salisbury NC, 28146',
    mainIndex: 2,
    starterIndex: 2,
  }) */
//};
/* 
//Order does not matter since in objects properties are defined
//For objects we use {} instead of () since we create objects with {}
const {name, openingHours, categories } = restaurant;

//If you want variable names to be different than the property names then you do the following
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

//setting defaut values
const {menu = [], starterMenu: starters = []} = restaurant;

console.log(name, openingHours, categories);

// Mutating variables
let a = 111; 
let b = 999;

const obj = {a:23, b:7, c:14};

({a, b} = obj);

//nested objects
const {fri: {open, close}} = openingHours;

console.log(open, close);

 */

//const [starter, mainCourse] = restaurant.order(2, 0);
//console.log(starter, mainCourse);

/* const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p=1, q=1, r=1] = [8,9];
console.log(p, q, r); */

/* //How to do this without spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

//spread operator
const goodNewArr = [1, 2, ...arr]; */
/* 
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
//console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays or more
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

const str = 'Jonas';

const letters = [...str];
 */
//console.log(letters);

/* const ingredients = [
  prompt("Let's make Pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt("Ingredient 3?"),
]; */

//console.log(ingredients);

//restaurant.orderPasta(...ingredients);
/* 
//objects
const newRestaurant = {...restaurant, founder:'Marco', founded: 1997};

console.log(newRestaurant); */

//SPREAD, because on the RIGHT side of =
/* const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

//You can use the spread operator on both sides of the equals
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, Risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat, weekdays);

const add = function (...numbers) {
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }

  return console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
 */

// 3
/* console.log(3 || 'Jonas');

// Jonas
console.log('' || 'Jonas');

// true
console.log(true || 0);

// null
console.log(undefined || null);

// Hello
console.log(undefined || 0 || ' ' || 'Hello' || 23 || null);


restaurant.numGuest = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests: 10;

const guest2 = restaurant.numGuests || 10;

// Nullish: null and undefined (NOT or '')
const guestCorrect = restaurant.numGuests ?? 10;

//Logical Assignment Operators(Below both are the same but one is cleaner and consice)
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ||= 10
 */

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}; */

/* // First Task
const [players1, players2] = game.players;
const [teamOneGK, ...teamOneFieldPlayers] = players1;
const [teamTwoGK, ...teamTwoFieldPlayers] = players2;

const allPlayers = [...players1, ...players2];

const playersFinal = [...allPlayers, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;

let printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};

team1 == team2 && console.log('The game is a draw');
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

printGoals(...game.scored);
 */

/* for (const item of menu) {
  console.log(item);
}

//If you want the index then you needs to do 
for (const [i, item] of menu.entires()){
  cionsole.log(`${i[0] + 1}: ${item[1]}`);
} */

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //You can make a funciton in both ways, the lower one is cleaner
  order: function (startIndex, mainIndex) {
    return console.log([
      this.starterMenu[startIndex],
      this.mainMenu[mainIndex],
    ]);
  }

    order(startIndex, mainIndex) {
      return console.log(
        this.starterMenu[startIndex],
        this.mainMenu[mainIndex]
      );
    }
  }, */

/*   // If openHours.mon doesn't exist then it won't even reach the open value
  console.log(restaurant.openingHours?.mon?.open);

  // real world example of optional chaining

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
  }

  //methods
  console.log(restaurant.order?.(0, 1)?? 'Method does not exist'); */
/* 
//Optional chaining with arrays
const users = [
  {
    names: 'Jonas',
    email: 'hello@jonas.io',
  },
];

console.log(users[0]?.name ?? 'User array empty');

//Property names
const properties = Object.keys(openingHours);
let openstr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}`
}

//Property Values
const values = Object.values(openingHours);

//Property values and index
const entries = Object.entries(openingHours);

for(const x of entries){
  console.log(x);
} */
/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Problem 1
for (const [i, goalScorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1} was scored by ${goalScorer}`);
}

// Problem 2
let sum = 0;
let avg = 0;

const oddsWinning = Object.values(game.odds);
for (const odds of oddsWinning) {
  sum += odds;
  avg = sum / oddsWinning.length;
}

console.log(avg);

//Problem 3
let [team1, team2] = Object.values(game);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' :  `Victor ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1)
}

console.log(scorers); */
/* 
const orderSet = new Set ([
  'Pasta', 
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta', 
  'Pizza',
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.delete('Risotto')
orderSet.add('Garlic Bread');

console.log(orderSet);

for (const order of orderSet) console.log(order);

orderSet.clear();

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);

console.log(staffUnique);

const newStaff = [...staffUnique];

console.log(staff);
console.log(new Set(staff).size);

console.log(newStaff); */

/* const rest = new Map();

// Calling the set method on a map like this does not only update the map but it also returns the map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

//Because the set method returns the map then we can chain set methods together
rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//rest.get receives the value based on the key
rest.get('name');
rest.get(true);

const time = 21;

//This shows the power of maps, we are checking if the restaurant is open or closed
rest.get(time > rest.get('Open') && time < rest.get('Close'));

//the Map.has method will check if categories exist
rest.has('Categories');

//Delete elements from the map
rest.delete(2);

//returns the size of the map
rest.size();

//Clears the entire map
rest.clear();

//We can use arrays or objects as map keys
const arr = [1, 2]
rest.set(arr, 'Test');
rest.get([1,2]);
rest.get(arr);

//We can use objects as map keys
rest.set(document.querySelector('h1', 'Heading')); */

/* const question = new Map([
  ['Question', 'What is the best programming language in the world?'], 
  [1, 'C'],
  [2, 'Java'], 
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
])

console.log(question);

//Convert object to map
const hoursMap = new Map(Object.entries(openingHours));

//Iteration is possible on maps because maps are iterables

//Quiz App
console.log(question.get('Question'));
for (const [key, value] of question ) {
  if(typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(answer === 3 ? question.get(true) : question.get(false));
console.log(question.get(question.get('Correct') === answer));

//Converting a Map to an arry
const newArr = [...question];

console.log(newArr); */

// Coding Challenge #3

/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();

console.log(`An event happened, on average, every ${time/gameEvents.size} minutes!`);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${min}: ${event}`);
} */
/* 
const airline = 'TAP Air Portugal';

//Fix capitalization in a name
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing Emails
const email = "Hello@Marco.io"
const loginEmail = "   Hello@Marco.Io \n";

const normalizedEmail = loginEmail.toLowerCase().trim();

// Replacing parts of strings
const priceGB = '$288,97';
const priceUS = priceGB.replace(',', '.');

console.log(priceUS);
 */
// Boolens with strings (includes, startsWith, EndsWith)

/* //Get the character of a certain position
plane[0];
'b737'[0];

//Get the length of the string
airline.length;
'b737'.length;

//Get the position of a certain letter for its first occurence
airline.indexOf('r');

//Get the position of a certain letter for its last occurence
airline.lastIndexOf('r');

//Search for entire words (CASE SENSITIVE)
airline.indexOf('Portugal');

//We can extract parts of a string using the slice method but we need the index of the strings
// .slice(start, end);
airline.slice(4);
airline.slice(4, 7);

//Extract the first word of a string without know the index
airline.slice(0, airline.indexOf(' '));

//Extract the last word of a string without knowing the index (+1 to remove the white space)
airline.slice(airline.lastIndexOf(' ') + 1);

//Extract from the end
airline.slice(-2);
airline.slice(1, -1);

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
 */

/* //Split method and join
const [firstName, lastName] = 'Marco Mercado'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); */
/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const camelCaseConversion = function (arr) {
  let arrToManipulate = [];
  let string = '';
  arr = arr.split('\n');

  for (const textToConvert of arr) {
    arrToManipulate = textToConvert.split('_');
    arrToManipulate[1] =
      arrToManipulate[1].slice(0, 1).toUpperCase() + arrToManipulate[1].slice(1).toLowerCase();
    string = arrToManipulate.join('').trim();
    console.log(string);
    }
};

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  camelCaseConversion(text);
});

/* 
/* TEST DATA
underscore_case
 first_name
  Some_Variable
 calculate_AGE
 delayed_departure
 */