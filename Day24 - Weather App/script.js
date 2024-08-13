const dayElement = document.getElementById('day');
const dateEle = document.getElementById('date');
const timeEle = document.getElementById('time');
const locationEle = document.getElementById('location');
const tempEle = document.getElementById('temperature');
const conditionEle = document.getElementById('condition');
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

const apiKey = 'fd00241949d72d4d343e0445008bf676';

const weatherConditions = {
    "clear": "Sunny",
    "clouds": "Cloudy",
    "rain": "Rainy",
    "snow": "Snowy",
    "drizzle": "Drizzly",
    "thunderstorm": "Stormy",
    "mist": "Misty",
    "fog": "Foggy",
    "haze": "Hazy",
    "dust": "Dusty",
    "sand": "Sandy",
    "ash": "Ashy",
    "squall": "Squally",
    "tornado": "Tornado"
};

function updateDateTime(){
    const now  = new Date();
    const options = {weekday : 'long' ,year : 'numeric' , month : 'long' , day : 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US',options);
    const [weekday ,...dateParts] = formattedDate.split(',');

    dayElement.textContent = weekday;
    dateEle.textContent = dateParts.join(' - ');
    timeEle.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        console.log('Weather Data:', data);

        if (data.cod === '404') {
            alert('City not found. Please try again.');
            return;
        }

        locationEle.textContent = `${data.name}, ${data.sys.country}`;
        tempEle.textContent = `${Math.round(data.main.temp)}°C`;

        console.log('Weather Main:', data.weather[0].main);

        const condition = data.weather[0].main.toLowerCase().trim();
        const weatherDescription = weatherConditions[condition] || "Unknown";
        conditionEle.textContent = weatherDescription;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching the weather data. Please try again.');
    }
}


searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

cityInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    }
});


//* Update date and time every second
setInterval(updateDateTime, 1000);

updateDateTime();
getWeather('New York');

