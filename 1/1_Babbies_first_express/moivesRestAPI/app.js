const express = require("express"); 
const app = express(); 
app.use(express.json()); 

//I am setting an array of movies, with a specific moviesID
let movieID = 1; 
const movies = []; 



//Now making a function of adding a movie to an array og movies. 
function addMovieToMyArray(title, year){
    movies.push({
        id: Number(movieID), //Id of the movie
        title: title, //Title of the movie
        year: Number(year)
    });
}

   //Adding a couple of movies first
   addMovieToMyArray("film1", 2022); 
   addMovieToMyArray("film2", 2021); 
   addMovieToMyArray("film3", 2020); 

 //find by id 
 function findMovie(id){
    return movies.find(movie => movie.id === id); //Tjekker om filmid vi har fundet passer med det paramater
}

//update
//deleteMoviebyID


//End points
//post a movie
app.post("/movies",(req,res)=>{
    addMovieToArray(req.body.title,req.body.year);
    res.send("Movie added.");
});



//set up the server on port 8080 and this should be a the button
app.listen(8080);