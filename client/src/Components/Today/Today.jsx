import React, { useState, useEffect } from 'react';
import './Today.css';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { FaSearch } from 'react-icons/fa';

function Today({ onWeatherUpdate }) {
  const [city, setCity] = useState('Tokio');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = () => {
    fetch(`http://localhost:4000/api/weather/today?city=${city}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        // Envía el estado del clima al componente padre
        onWeatherUpdate(data.weather[0].main);
      })
      .catch(error => {
        console.error('Error al obtener datos del clima:', error);
      });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    fetchWeatherData();
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
        <button onClick={handleSearchClick} className="search-button">
          <FaSearch className="search-icon" />
        </button>
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
