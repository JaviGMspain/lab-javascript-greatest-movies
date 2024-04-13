// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
};
// const getAllDirectors = (moviesArray) => moviesArray.map(movie => movie.director);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const result = moviesArray.filter(movie => movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`))
    return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const result = moviesArray.reduce((total, movie) => {
        const score = (movie.score || 0);
        return total + score;
    }, 0) / moviesArray.length;
    return Math.round(result * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const result = moviesArray.filter(movie => movie.genre.includes(`Drama`));
    if (result.length === 0) {
        return 0;
    }
    const sum = result.reduce((total, movie) => total + movie.score, 0);
    const average = sum / result.length;
    return Math.round(average * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = [...moviesArray].sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesArray = [...moviesArray].sort((a, b) => a.title.localeCompare(b.title));
    return newMoviesArray.slice(0, 20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesArray = moviesArray.map(movie => {
        const newMovie = { ...movie };

        if (newMovie.duration.includes('h')) {
            const hours = parseInt(newMovie.duration.split('h')[0]);
            let minutes = 0;

            if (newMovie.duration.includes('min')) {
                minutes = parseInt(newMovie.duration.split(' ')[1].split('min')[0]);
            }

            newMovie.duration = hours * 60 + minutes;
        } else {
            newMovie.duration = parseInt(newMovie.duration);
        }

        return newMovie;
    });

    return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    let yearScores = {};
    moviesArray.forEach(movie => {
        if (!yearScores[movie.year]) {
            yearScores[movie.year] = [movie.score];
        } else {
            yearScores[movie.year].push(movie.score);
        }
    });

    let bestYear = null;
    let highestAvg = -Infinity;

    for (let year in yearScores) {
        let sum = yearScores[year].reduce((acc, curr) => acc + curr, 0);
        let avg = sum / yearScores[year].length;

        if (avg > highestAvg || (avg === highestAvg && year < bestYear)) {
            bestYear = year;
            highestAvg = avg;
        }
    }

    return `The best year was ${bestYear} with an average score of ${highestAvg.toFixed(2)}`;
}


