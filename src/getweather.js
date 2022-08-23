const displayTemp = document.querySelector('[data-temp]');
const displayFeelsLike = document.querySelector('[data-feels-like]');

export default async function getAPI(city) {
        const apiKey = '39376e8cea04ed893279fc479d063c5b';
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`, {
                mode: 'cors',
        });
        const weatherData = await response.json();
        // const { coord } = weatherData;
        // coord.name = weatherData.name;
        // coord.country = weatherData.sys.country;
        // console.log(coord);
        console.log(weatherData);
        console.log(weatherData[0].lat);
        const weatherResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${weatherData[0].lat}&lon=${weatherData[0].lon}&appid=${apiKey}`,
                { mode: 'cors' }
        );
        const weatherInfo = await weatherResponse.json();
        console.log(weatherInfo);
        return weatherInfo;
}

export async function getWeather(weather) {
        const { temp } = weather.main;
        const feelsLike = weather.main.feels_like;
        console.log(temp);
        console.log(feelsLike);

        const feelsLikeFarConversion = Math.round(1.8 * (feelsLike - 273) + 32);
        const farenConversion = Math.round(1.8 * (temp - 273) + 32);
        console.log(farenConversion);
        displayTemp.innerText = `Temp: ${farenConversion} ℉`;
        displayFeelsLike.innerText = `Feels Like ${feelsLikeFarConversion} ℉`;

        // const lat = await weatherData.lat;
        // console.log(lat);

        // // eslint-disable-next-line prefer-destructuring
        // const lon = await weatherData.lon;
        // console.log(lon);
}
