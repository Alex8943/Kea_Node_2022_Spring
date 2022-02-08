//const e = require("express");
//const express = require("express"); //dette er en metode, jeg har ikke installeret noget her. 

 //const app = express(); //Her der instasiere vi express

//const app = require("express")();  //instansiere metoden via "()" som lige er blevet kaldt gennem require metoden. 

//Dette tager endpoint og en callback funktion 
// task write an empty call back function


const express = require("express"); 
const app = express(); 

app.get("/", (req, res) => { //res og req er et biblotek, som indeholder metode som hedder send()
    res.send({ message: "Welcome to my server. This is my first route ever. " }); 
});


app.use(express.json());

//create, post, delete, update

app.post("/", ( req, res) => {
    console.log(req.body); 
    res.send(req.body); 
}); 


app.listen(8080); 
//ctr c for at stoppe porten!! 






