// understanding the FOR

const quantity = 10;
let sum = 1;

// variable / condition / increment or decrement

for (let i = 0; i < quantity; i++) {
    console.log(i);
    sum = sum + i;
}

console.log('End', sum);