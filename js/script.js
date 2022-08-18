"use strict";

let numberOfFilms = promt('Сколько фильмов вы уже посмотрели?');

let personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false,
}

let lastFilm = promt('Один из поледных фильмов?', '');
let rating   = promt('На сколько оцените его?', '');

console.log(personalMovieBD.movies.lastFilms = personalMovieBD.movies.rating);