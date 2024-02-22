// nowadays we have two types of variables 

const numero1 = 1;
let numero2 = 2;

// what's the difference between const and let?
// const -> we cannot change the value in any other way
// let->  we can change the value with various ways
// but why use let? 
// we have cases that we wanna reasign the value of let

// example:
//reasign the value of let using a if statment 
if(numero1 === 1) {
    numero2 = 6
}

//agora o valor de numero2 é 6
// now the value of let numero2 is 6
console.log('Novo valor do let:', numero2)