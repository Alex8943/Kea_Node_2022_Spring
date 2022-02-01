// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

let result = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(" Opgave 1 ")
console.log(result.toFixed(2)); //Forventet resultat: 3.40




// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";


let newResult = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo); 

console.log(" Opgave 2 ")
console.log(result.toFixed(2)); //forventet resultat: 3.40



// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let avg = (one + two + three) / 3; 

console.log("Opgave 3 ")
console.log(avg.toFixed(5)); //Forventet resultat: 51.00000




// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("Opgave 4")
console.log( letters.charAt(2)); //Husk at en array starter på plads 0 og IKKE 1!!! 


// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log("Opgave 5");
console.log(fact.charAt(17).toUpperCase() + fact.slice(18));

