

const input = document.querySelector('.input-search')

function changeWeatherUI(weather) {
	const city = document.querySelector('.name .city')
	const country = document.querySelector('.name .country')
	const time = document.querySelector('.time')
	const temperature = document.querySelector('.temperature .value')
	const shortDesc = document.querySelector('.short-desc')
	const visibility = document.querySelector('.visibility span')
	const wind = document.querySelector('.wind span')
	const cloud = document.querySelector('.cloud span')

	city.innerHTML = weather.name
	country.innerHTML = weather.sys.country
	time.innerHTML = new Date().toLocaleString()
	shortDesc.innerHTML = weather.weather[0].main
	visibility.innerHTML = weather.visibility + ' (m)'
	wind.innerHTML = weather.wind.speed + ' (m/s)'
	cloud.innerHTML = weather.clouds.all + ' (%)'

	const temp = Math.round(weather.main.temp)
	temperature.innerHTML = temp
	if(temp >= 25 && temp < 31 ){
		document.body.className = 'hot'
	}
	if(temp <= 24 && temp >20){
		document.body.className = 'autumn'
	}
	if(temp <= 20 && temp >= 16){
		document.body.className = 'rain'
	}
	if(temp <= 15 && temp >= 0){
		document.body.className = 'cold'
	}
	if(temp < 0){
		document.body.className = 'snow'
	}	
}

input.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		getWeather(e.target.value)
	}
})

async function getWeather(input) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=655e7b267d7fa40c606eb10a3b108bc6`

	const res = await fetch(url)
	const weather = await res.json()

	changeWeatherUI(weather)
}

getWeather('ha noi')

