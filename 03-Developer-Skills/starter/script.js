// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//coding challenge #1
const printFunction = function (arr) {
  let forecast = ''
  for (let i = 0; i < arr.length; i++){
    forecast += `${arr[i]}℃ in ${i+1} days, `
  }

  return console.log(forecast);
}

printFunction([12, 5, -5, 0, 4])