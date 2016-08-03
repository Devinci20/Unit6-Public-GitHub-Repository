function movies(title, rating, director, producer, studio, releaseDate){
    this.movieTitle = title;
    this.movieRating = rating;
    this.movieDir = director;
    this.movieProd = producer;
    this.movieStudio = studio;
    this.movieDate = releaseDate;
}

var newMovie  = new movie("X-Men:Apocalypse","6of10",Bryan Singer","Bryan Singer","20th Century Fox","May 27 2016");