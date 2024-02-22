// understanding the IF

//sometimes we wanna validate something

// example 1:
// we wanna know if the age is under 18 or not
// if the age is 18+ we display 'Can visit' otherwise display 'you're under age'

const age = 18;
let approvedVisit = false;

// if the condition evaluate to true we go to the first block of code in if statement
// otherwise the code is gonna jump off the block and go to another one
// in this case we have a else statement 

/*
EXAMPLE 1
if(age >= 18 ) {
    approvedVisit = true;
    console.log('User can enter?', approvedVisit, '-Authorized Access');
}
else {
    console.log('User can enter?',approvedVisit,'-Access Denied, you are under age');
}
*/

// example 2:
// now we have some names in a sort of list, so we can guarantee the access with 18+ or the name on the list
// we use || (or) 
// now at least one of the condition need to evaluate to true

/* 
EXAMPLE 2
const listName1 = 'Marcos';

if (age >= 18 || listName1 === 'Marcos') {
    approvedVisit = true;
    console.log('User can enter?', approvedVisit, '-Authorized Access')
} else {
    console.log('User can enter?', approvedVisit,'-Acess Denied, you are under age');
}

*/

// example 3:
// now we have to evaluate to true the Age and the Name
// we use &&
// now both of the condition need to evaluate to true

//EXAMPLE 3
const listName1 = 'Marcos';

if (age >= 18 && listName1 === 'Marcos') {
    approvedVisit = true;
    console.log('User can enter?', approvedVisit, '-Authorized Acess')
} else
    console.log('User can enter?', approvedVisit, '-Access Denied')