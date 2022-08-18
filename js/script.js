"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
}

let lastFilm = prompt('Один из поледных фильмов?', ''),
    rating = prompt('На сколько оцените его?', '');

personalMovieBD.movies[lastFilm] = rating;
console.log(personalMovieBD);