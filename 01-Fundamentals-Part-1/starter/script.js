let js = 'amazing';
if (js == 'amazing') console.log('JavaScript is fun!');

// Assignment for Values and Variables
let country = "United States";
let continent = "North America";
let population = "60,000,000"

console.log(country);
console.log(continent);
console.log(population);

// Assignment for Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Assignment for let, const, and var
language ="English";


// Coding Challenge #1
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// Coding Challenge #2
if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI (${johnBMI})!`);
}

// Coding Challege #3
let dolphinsAVG = (96 + 108 + 89) / 3;
let koalasAVG = (88, 91, 110) / 3;

if ((dolphinsAVG > koalasAVG) && (dolphinsAVG > 100) && (koalasAVG > 100)){
    console.log(`The dolphins win the match!`)
} else if (dolphinsAVG === koalasAVG){
    console.log(`The game will go into overtime to determine a winner!`)
} else {
    console.log(`The Koalas win the match!`)
}

//switch statement

const day = 'sa';

switch(day){
    case 'Monday': //day === 'Monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples ');
        break;
    case 'Friday':
        console.log('record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekding :D');
        break;
    default: 
        console.log('Not a valid day.')
}

// Coding Challenge #4
const billValue = 430;
let tip;

billValue >= 50 && billValue <= 300 ? tip=0.15*billValue:
tip=0.2*billValue

console.log(`${billValue}, ${tip}, `);