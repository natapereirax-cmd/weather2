
export async function getWeatherByCity (event) {
    event.preventDefault();

    const searchTitle = document.querySelector('.title');
    const searchBox = document.querySelector('.search-form');
    const loading = document.querySelector('.loading');

    searchTitle.style.display = 'none';
    searchBox.style.display = 'none';
    loading.style.display = 'flex';
    
    const input = document.querySelector('.search-input');
    const result = document.querySelector('.results');
    const cityTitle = document.querySelector('.city-title');
    const dataSection = document.querySelector('.data-section')

    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(input.value)}&count=1&language=pt&format=json`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    try {
        const {latitude, longitude, name, country} = geoData.results[0];

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        cityTitle.innerHTML=`
            ${name}, ${country}
        `

        dataSection.innerHTML = `
            <p><strong>Temperatura atual:</strong> ${weatherData.current.temperature_2m}°C</p>
            <p><strong>Máxima hoje:</strong> ${weatherData.daily.temperature_2m_max[0]}°C</p>
            <p><strong>Mínima hoje:</strong> ${weatherData.daily.temperature_2m_min[0]}°C</p>
            <p><strong>Umidade:</strong> ${weatherData.current.relative_humidity_2m}%</p>
            <p><strong>Vento:</strong> ${weatherData.current.wind_speed_10m} km/h</p>
        `;
    } catch (err) {
        alert("We couldn't find the data! Please, try again.")
    }

    loading.style.display = 'none';
    result.style.display = 'flex';
}