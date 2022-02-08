function greetings(){
    console.log("hello world"); 
}
//Anonum function
const greetingsInvariable = function(){
    console.log("hello world in a variable")
}

//Hvorfor er callback funktioner vigtige = 
function doingSomething(anyFunctionReference, name){
    return anyFunctionReference(name); 
}

const running = name => console.log(`${name} is running`); 

console.log(running, "Alexander");


const drinking = (name) => name + "is drinking."; 

console.log(doingSomething(drinking, "Somebody ")); 














/*
function doingSomething(anyFunctionReference, name){ //anyFunctionReference = kan blive kaldt igen, på et senere tidspunkt
    anyFunctionReference(name); 
}
*/