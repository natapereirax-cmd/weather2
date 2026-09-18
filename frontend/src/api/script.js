
export async function getWeatherByCity (event) {
    event.preventDefault();

    const searchTitle = document.querySelector('.title');
    const searchBox = document.querySelector('.search-form');
    const loading = document.querySelector('.loading');
    const AIloading = document.querySelector('.gemini-loading');
    const AIfeedback = document.querySelector('.ai-feedback');
    const searchAgain = document.querySelector('.search-again');

    searchTitle.style.display = 'none';
    searchBox.style.display = 'none';
    AIfeedback.style.display = 'none';
    searchAgain.style.display = 'none'
    loading.style.display = 'flex';
    
    const input = document.querySelector('.search-input');
    const result = document.querySelector('.results');
    const cityTitle = document.querySelector('.city-title');
    const dataSection = document.querySelector('.data-section')

    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(input.value)}&count=1&language=pt&format=json`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    let weatherData;

    try {
        const {latitude, longitude, name, country} = geoData.results[0];

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
        const weatherRes = await fetch(weatherUrl);
        weatherData = await weatherRes.json();

        cityTitle.innerHTML=`
            ${name}, ${country}
        `

        dataSection.innerHTML = `
            <p><strong>Temp.</strong> <i class="bx bx-tachometer"></i> ${weatherData.current.temperature_2m}°C</p>
            <p><strong>Max.</strong> <i class="bx bx-sun"></i> ${weatherData.daily.temperature_2m_max[0]}°C</p>
            <p><strong>Min.</strong> <i class="bx bx-cloud"></i> ${weatherData.daily.temperature_2m_min[0]}°C</p>
            <p><strong>Hum.</strong> <i class="bx bx-droplet"></i> ${weatherData.current.relative_humidity_2m}%</p>
            <p><strong>Wind</strong> <i class="bx bx-wind"></i> ${weatherData.current.wind_speed_10m} km/h</p>
`;
    } catch (err) {
        alert("We couldn't find the data! Please, try again.")
        return
    }

    loading.style.display = 'none';
    result.style.display = 'flex';

    const AI_answer = document.querySelector('.ai-answer');

    try {
        const GeminiRes = await fetch("http://localhost:3000/api/gemini", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                weatherData
            })
        });
            const GeminiData = await GeminiRes.json();

            AIloading.style.display = 'none';
            AIfeedback.style.display = 'flex';
            searchAgain.style.display = 'flex';
            
            AI_answer.textContent = GeminiData.text;
            console.log(GeminiData.text);

        } catch(err) {
            alert("We couldn't use the AI.");
            console.error('Gemini Error:', err);
        }
    
}
