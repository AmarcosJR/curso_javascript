// how to convert string and number;

const wage = 103.4;

// convert Number into a string with 2 decimal places
console.log('wage:', wage.toFixed(2))

// now convert String into a Number

const wageString = '103'

console.log('wage:', Number(wageString))

// we can also use toFixed in this case

console.log('wage:', Number(wageString).toFixed(2));