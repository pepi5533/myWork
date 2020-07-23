let api = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=hr';
let apiKey = '046137ed276ef98ee5d51f545318f0ee';
let iconBaseUrl = 'http://openweathermap.org/img/wn/';

document.getElementById('search').addEventListener('click', getWeather);

let city;

function getWeather(event) {
    // input i api
    let input = document.getElementById('city');
    city = input.value;
    input.value = '';
    let url = api + '&q=' + city + '&appid=' + apiKey;
    // xhr / JSON
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        let data = JSON.parse(xhr.response);
        
        process(data);
    }
    xhr.send();
}
// Procesiranje
function process(data) {

    let weatherDiv = document.createElement('div');
    let h1 = document.createElement('h1');

    h1.innerText = city;
    weatherDiv.appendChild(h1);

    if(data && data.weather && data.weather.length > 0) {
        let weather = data.weather[0];

        let iconUrl = iconBaseUrl + weather.icon + '@2x.png';

        // img 
        let img = document.createElement('img');
        img.setAttribute('src', iconUrl);
        img.setAttribute('alt', weather.main)
        weatherDiv.appendChild(img);

        //wind 
        let wind = document.createElement('p');
        wind.innerText = 'Vjetar: ' + data.wind.speed + ' m/s' + ', ' + data.wind.deg + '°';
        weatherDiv.appendChild(wind);

        //temp
        let temp = document.createElement('p');
        temp.innerText = 'Temp: ' + data.main.temp + ' °C';
        weatherDiv.appendChild(temp);
        
        //desc
        let desc = document.createElement('p');
        desc.innerText = weather.description;
        weatherDiv.appendChild(desc);
    }else {
        //error
        let err = document.createElement('p');
        err.innerText = 'Cannot get weather for ' + city + ' (' + data.message + ')';  
        weatherDiv.appendChild(err);
    }
    let container = document.getElementById('weather');
    container.innerHTML = '';
    container.appendChild(weatherDiv);
}