const weatherContainer = document.querySelector('.weather');
const weatherHours = document.querySelector('.weatherHours');

let apiKey = 'c2e769a40dc1471f98f160536231012'
let city = 'MADRID';


const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`

const getData = async () => {
    try {
        const response = await fetch(WEATHER_URL);
        if(!response.ok) {
            throw new Error('Error!!')
        }
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(error)
    }
};

const renderData = async() => {
    let currentHour = new Date().getHours();
    const forecast = await getData();
    let dayArray = forecast.forecast.forecastday[0].hour

    let currentWeather = forecast.forecast.forecastday[0].hour[currentHour]
    let currentCondition = currentWeather.condition.text;
    let currentIcon = currentWeather.condition.icon;
    let temperature = forecast.current.temp_c;
    let preci = currentWeather.chance_of_rain
    let humedad = forecast.current.humidity;
    let wind = forecast.current.gust_kph;

    const html = `
    <div class='weatherWrap'>
        <div class='weatherTitle'>
            <p class='cityText'>${city}</p>
            <p class='currentText'>${currentCondition}</p>
        </div>
        <div class='weatherBox'>
            <img class='tempIcon' src=${currentIcon} alt=${currentCondition}/>
            <p class='tempText'>${temperature}º<i class="bi bi-thermometer-half"></i></p>
            <div class='weatherCond'>
                <p class='condText'>Precipitaciones: ${preci}%</p>
                <p class='condText'>Humedad: ${humedad}%</p>
                <p class='condText'>Viento: ${wind} km/h</p>
            </div>
        </div>
    </div>
    `

    weatherContainer.innerHTML = html;

    dayArray.forEach(hour => {
        let time = hour.time.slice(-5)
        let icon = hour.condition.icon
        let temp = hour.temp_c
        let html2 = `
            <div class='weatherCard'>
                <p class='cardText'>${time}</p>
                <img class='tempIcon' src=${icon} alt=${time}/>
                <p class='cardText'>${temp}º</p>
            </div>
        `
        weatherHours.innerHTML += html2
    })
};

renderData();