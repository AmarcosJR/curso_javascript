// understanding the FOR

const quantity = 10;
let sum = 1;

// variable / condition / increment or decrement
// while the condition evaluate to true, they will run the block of code
// when the loop have finished, they will jump off the block

for (let i = 0; i < quantity; i++) {
    console.log(i);
    sum = sum + i;
}

console.log('End', sum);