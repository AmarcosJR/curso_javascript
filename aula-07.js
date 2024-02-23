// understanding the ARRAY



// if we wanna a list of ages we dont wanna do every age like this
// const ageMarcos = 18; const ageCaio = 32; const ageLeo = 45;




const age = [18, 32, 45];

// how to access the ARRAY
// ARRAY AWAYS START ON 0 

console.log('Marcos age is:', age[2])

// we can see the quantity of ages in age using the .length

console.log('quantitiy of ages on the list:', age.length)

// we can use ARRAY in multiple ways
// example 1: to interact with FOR

for (let i = 0; i < age.length; i++) {
    console.log('result:', age[i])
}

