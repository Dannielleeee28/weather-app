const API_KEY = 'c262b76928a6bdf42085415ca9004779'; // Replace this with your OpenWeatherMap API key

document.querySelector('button').addEventListener('click', () => {
  const city = document.querySelector('input').value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const resultDiv = document.querySelector('.weather-result');
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      document.querySelector('.weather-result').innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});
