/*
{
    "title":"The Shawshank Redemption",
    "year":1994,
    "director":"Frank Darabont",
    "duration":"2h 22min",
    "genre":["Crime","Drama"],
    "score":9.3
  }
*/
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function(allMovies) {
        return allMovies.director;
    });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(function(drama) {
        if (drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')) {
            return true;
        }
    });
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } 

    const scoredMovies = moviesArray.reduce(function(accumulator, currentValue) {
        if (currentValue.score) {
            return accumulator + currentValue.score;
        } else {
            return accumulator;
        }
    }, 0)
    const theAverage = scoredMovies / moviesArray.length
    return Number(theAverage.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesAverage = moviesArray.filter(function(allMovies) {
        return allMovies.genre.includes('Drama')
    })
    return scoresAverage(dramaMoviesAverage);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
