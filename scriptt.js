async function fetchWeather() {
    const apiKey = '93dd5b90738302d7559dbae71fc6ea6c'; // Replace with your OpenWeatherMap API key
    const location = document.getElementById('locationInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    const weatherDiv = document.getElementById('weather');
    const loadingIndicator = document.getElementById('loadingIndicator');

    try {
        // Display loading indicator while fetching data
        loadingIndicator.classList.remove('hidden');
        weatherDiv.classList.add('hidden');

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display weather data
        weatherDiv.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        // Hide loading indicator and display weather data
        loadingIndicator.classList.add('hidden');
        weatherDiv.classList.remove('hidden');
    } catch (error) {
        console.error('Error fetching weather data:', error);

        // Display error message
        weatherDiv.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;

        // Hide loading indicator
        loadingIndicator.classList.add('hidden');
        weatherDiv.classList.remove('hidden');
    }
}
