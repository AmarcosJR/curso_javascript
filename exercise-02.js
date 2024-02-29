/*
Read an integer value X. Then present the 6 consecutive odd values starting from X, one value per line, including X if applicable.

Input
The input will be a positive integer value.

Output
The output will be a sequence of six odd numbers.

Example Input-Output

Input: 8

Output:
9
11
13
15
17
19

*/

function oddValues(value) {
    let counter = 0;
    let currentNumber = value;

    while (counter < 6 ) {
        if(currentNumber % 2 !== 0) {
            console.log(currentNumber)
            counter++
        }
        currentNumber++
    }
}

oddValues(8)

function pairValues (value) {
    counter = 0;
    currentNumber = value;

    while (counter < 6 ) {
        if (currentNumber % 2 == 0) {
            console.log(currentNumber)
            counter++
        }
        currentNumber++
    }
}

// pairValues(10)

