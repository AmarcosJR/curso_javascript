// understanding the DO-WHILE

// in WHILE the loop will be read when the condition evaluate to true
// in DO-WHILE will be a little bit different
// the block of code in DO will be running at least one time, even if the WHILE condition evaluate to false
let age = 1;

do {
    console.log('PASS', age)
    age = age + 1;
} while (age < 18);