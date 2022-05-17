"use strict";

let numberOfFilms;
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели ','');
	while (numberOfFilms ==''|| numberOfFilms == null || isNaN(numberOfFilms)){
			numberOfFilms = +prompt('Сколько фильмов вы посмотрели ','');
	}
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
}
function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов',''),
			b = prompt('На сколько оцените его ?','');
		if (a != null && b !=null && a != ''&& b != ''&& a.length<50 && b.length<50){
			personalMovieDB.movies[a] = b;
			console.log('Все ОК !')
		}else {
			console.log('ERROR');
			i--;
		}
	}
}
rememberMyFilms();
function detectPersonalLevel() {
	if (personalMovieDB.count<10){console.log('Мало фильмов');}
	else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {console.log('Ниче так');}
	else if (personalMovieDB.count > 10){console.log('Да вы гурман, Сер');}
	else {console.log('ERROR')};
}
detectPersonalLevel();


function showMyDB(hidden) {
	if(!hidden){
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.private);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'' );
	}
}
writeYourGenres();

