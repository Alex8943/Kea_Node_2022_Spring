// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
    }
    
    Object.keys(alienMessage).forEach((key) => {
        console.log(alienMessage[key])
    
    });

// Log the message 



// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const info = {
    name: "Alexander",
    age: 22
}

console.log( "My name is: " + info.name + ", age is: " + info.age);



// Exercise 3 - Add a property 
let myFirstProperty = {
    name: "Alex",
};

console.log("Hello Alexander my name is", myFirstProperty.name); 

myFirstProperty.number = 3221;  

console.log("Hello my name is " + myFirstProperty.name + ", and my number is: " + myFirstProperty.number); 

// make a rule called isAllowed and let the value be true
const a = 'word';
const c = false;

console.log(c || a); // true
//If the statement is not true, it will return "word"




