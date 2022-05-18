function getTimeFromMinutes(t) {
	if(Math.floor(t / 60) === 1){
		return `Это ${Math.floor(t / 60)} час и ${t - Math.floor(t / 60) * 60} минут`;
	}
	else if(Math.floor(t / 60) === 2 || Math.floor(t / 60) === 3|| Math.floor(t / 60) === 4){
		return `Это ${Math.floor(t / 60)} часа и ${t - Math.floor(t / 60) * 60} минут`;
	}
	else if (typeof (t) === 'number' && t >= 0 && Number.isInteger(t) === true) {
		return `Это ${Math.floor(t / 60)} часов и ${t - Math.floor(t / 60) * 60} минут`;
	}
	else return 'Ошибка, проверьте данные';
}


console.log(getTimeFromMinutes(12.5));
