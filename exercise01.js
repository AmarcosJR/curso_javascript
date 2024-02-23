/* Joaozinho wants to calculate and display the amount of fuel spent on a trip, using a car that consumes 12 KM/L. To do this, he would like you to assist him through a simple program. To perform the calculation, the time spent on the trip (in hours) and the average speed during it (in km/h) must be provided. Thus, the distance traveled can be obtained, and then calculate how many liters would be necessary. Show the value with 3 decimal places after the point.
Input
The input file contains two integers. The first one is the time spent on the trip (in hours) and the second one is the average speed during it (in km/h).

Output
Print the quantity of liters needed to complete the trip, with three digits after the decimal point.

Example Input/Output:

Input 1:
10
85

Output 1:
70.833

Input 2:
2
92

Output 2:
15.333

Input 3:
22
67

Output 3:
122.833*/

const kmPerL = 12;

function fuelExpense (time, mediaSpeed) {
    let result =  time * mediaSpeed / kmPerL;
    return result.toFixed(3);

    //  Melhor metodo by Caio
    // return return (time * mediaSpeed / KmPerL).toFixed(3);
}

console.log(fuelExpense(10, 85));
console.log(fuelExpense(2, 92));
console.log(fuelExpense(22, 67));
