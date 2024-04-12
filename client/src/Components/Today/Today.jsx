import React, { useState, useEffect } from 'react';
import './Today.css';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';

function Today({ onWeatherUpdate }) {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/weather?city=${city}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        // Envía el estado del clima al componente padre
        onWeatherUpdate(data.weather[0].main);
      })
      .catch(error => {
        console.error('Error al obtener datos del clima:', error);
      });
  }, [city, onWeatherUpdate]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="today-card">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
          className="city-input"
        />
      </div>
      {weatherData && weatherData.main && weatherData.weather ? (
        <div className="weather-details">
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <div className="additional-info">
            <p><WiHumidity /> Humidity: {weatherData.main.humidity}%</p>
            <p><WiStrongWind /> Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Today;
