// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const e = require("express");
const { arrayBuffer } = require("stream/consumers");


const letters = ["a", "b", "c"]; 
// show b in the console 

    console.log("OPGAVE 1: " + letters[1]); 



// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];


// What a lonely array. Add at least 3 friend objects to it.  
friends.push("test", " ny ", "Mogens", "Negle", "Kjole ", "mr. beau cuddles", "lucky"); 

for(let i = 0; i < friends.length; i++){
    console.log("OPGAVE 2: " + friends[i])
}

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];


  console.log("OPGAVE 3: " + significantMathNumbers.indexOf(1729));
  
  

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 




// --------------------------------------
// Exercise 4 - Inserting elements

const newDiet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket




// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

 let newObjects = [2, 4, 7, 3, 11]; 
    const index = newObjects.indexOf(11); 
    newObjects.splice(index, 1); 

    console.log("OPGAVE 5: " +newObjects); 



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
    

    dinnerTray = []; 

    dinnerTray.push(newDiet); 

    console.log("OPGAVE 6: " + dinnerTray)


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for(i = 1; i <= lettersExpanded.length; i+=2){
    console.log(lettersExpanded[i]);
}




// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

for(let i = 0; i < numbers.length; i++){
    if(i > 6 && i < 0){
        console.log(i); 
    } else{
        discardedNumbers.push(numbers[i]); 
    }
}

console.log("OPGAVE 8: number array: " + numbers);
console.log("Discard array: " + discardedNumbers);  


// --------------------------------------


