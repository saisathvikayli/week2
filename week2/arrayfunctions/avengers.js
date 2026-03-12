
// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
let gen = movies.filter((movie)=> movie.genre == 'Sci-Fi')
console.log(gen)
//     2. map() to return:
//             "Inception (8.8)"
let mrate = movies.map( (movie)=>
    {
  if (movie.title === "Inception") 
    {
    return movie.title + " (" + movie.rating + ")";
  }
});

console.log(mrate);

//     3. reduce() to find average movie rating
let ratings = movies.reduce((initial,end)=> initial + end.rating,0)
console.log(ratings/movies.length)
//     4. find() movie "Joker"
let mname = movies.find((finding)=> finding.title == "Joker")
console.log('found' , mname)
//     5. findIndex() of "Avengers"
let mindex = movies.findIndex((index) => index.title == 'Avengers')
console.log(mindex)