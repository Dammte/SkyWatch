import React, { useState, useEffect } from 'react';
import './Today.css';

function Today() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/weather')
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error al obtener datos del clima:', error);
      });
  }, []);

  return (
    <div className="today-card">
      <h2>Weather Today</h2>
      {weatherData ? (
        <div>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Temperature: {weatherData.main.temp}°C</p> {/* Mostrar la temperatura */}
          <p>Weather: {weatherData.weather[0].description}</p> {/* Mostrar la descripción del clima */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Today;
