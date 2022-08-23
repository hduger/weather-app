import getAPI, { getWeather } from './getweather';
// npx webpack --watch
console.log('hunter is the best person in the worlds');
console.log('hello hunter');
console.log('hello hunter');
const apiKey = '39376e8cea04ed893279fc479d063c5b';

const btn = document.querySelector('[data-button]');

btn.addEventListener('click', async () => {
        const inputVal = document.querySelector('.search-location');
        const cityName = inputVal.value;
        const weatherData = await getAPI(cityName);

        const temps = await getWeather(weatherData);
});
// // getAPI(cityName);
