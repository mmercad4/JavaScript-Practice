'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

function logger() {
    console.log('my name is Jonas');
}

logger();

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1997, 'Marco'));

const cutFruitPieces = fruit => {
    return fruit * 4;
}

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;

    return console.log(juice);
}

fruitProcessor(2, 3);


//Coding Challenge #1

const calcAverage = (firstScore, secondScore, thirdScore) => {
    return ((firstScore + secondScore + thirdScore) / 3)
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgKoalas >= (avgDolphins * 2)) {
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else if (avgDolphins >= (avgKoalas * 2)) {
        return console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        return -1;
    }
}
checkWinner(avgDolphins, avgKoalas); */

/* // Coding Challenge #2
const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? 0.15 * billValue :
        0.2 * billValue
}

console.log(calcTip(600));

const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const total = new Array(125 + calcTip(125), 555 + calcTip(555), 44 + calcTip(44));

console.log(bills, tips, total)

const jonas = {
    firstName: 'Marco',
    lastName: 'Mercado',
    age: 25,
    job: 'Unemployed',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        return 2022 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
}; */

//console.log(jonas.getSummary());

/* //Coding Challenge #3
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        const bmi = this.mass / this.height ** 2;
        this.bmi = bmi;
        return bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        const bmi = this.mass / this.height ** 2;
        this.bmi = bmi;
        return bmi;
    }
} */

/* console.log(`${john.calcBMI() > mark.calcBMI() ? john.firstName + "'s BMI (" + john.bmi + ") is higher than " + mark.firstName + "'s BMI(" + mark.bmi + ")!" :
    mark.firstName + "'s BMI (" + mark.bmi + ") is higher than " + john.firstName + "'s BMI(" + john.bmi + ")!"}`)

// a for loop keeps running while coniditon is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repitition ${rep}`);
}

//For loop to loop through an array
const jonasArray = [
    'Marco',
    'Mercado',
    25,
    'Unemployed',
    ['Michael', 'Peter', 'Steven']
]

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i])
}

// Continue and Break
console.log('--- only strings ---')
for (let i = 0; i < jonasArray.length; i++) {

    //if the type is not a string then it will not move on to the console.log
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- only strings ---')
for (let i = 0; i < jonasArray.length; i++) {

    //After the first number is found then nothing is printed "including the line of code where the number is located because the code breaks"
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

//looping backwards
const marco = [
    'Marco',
    'Mercado',
    25,
    'Unemployed',
    ['Michael', 'Peter', 'Steven']
]

for (let i = marco.length; i >= 0; i--) {
    console.log(marco[i]);
}

//loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise} -----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repition ${rep}`);
    }
}

//while loop (while rep is less than or equal to 10 then the while loop will continue running)
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repition ${rep}`);
    rep++
}

//roll a dice until the dice hits 6
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice===6) {
        console.log(`You rolled a ${dice}`);
        console.log('The dice hit 6, the iteration will now end.');
    }
} */

//Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];

const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? 0.15 * billValue :
        0.2 * billValue
}

const calcAverage = function (arr){
    let sum = 0; 

    for (let i = 0; i < arr.length; i++){
        //sum = sum + arr[i];
        sum += arr[i];
    }

    let avg = sum / arr.length;

    return console.log(`The average total of your outings for this month is $${avg}!`);

}

for (let i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
    console.log(`Your bill is ${bills[i]} with an added tip of ${tips[i]} for a grand total of ${totals[i]}`)
}

calcAverage(totals);