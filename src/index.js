console.log('hi');

const apiKey = '39376e8cea04ed893279fc479d063c5b';

const btn = document.querySelector('[data-button]');

async function getAPI(city) {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${apiKey}`, {
                mode: 'cors',
        });
        const weatherData = await response.json();
        console.log(weatherData);
}
btn.addEventListener('click', () => {
        const inputVal = document.querySelector('.search-location');
        const cityName = inputVal.value;
        getAPI(cityName);
});
// getAPI(cityName);
