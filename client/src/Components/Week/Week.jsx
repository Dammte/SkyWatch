import React, { useState, useEffect } from 'react';
import './Week.css';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import axios from 'axios';

function Week({ onWeatherUpdate }) {
  const [city, setCity] = useState('Tokio');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = () => {
    axios.get(`http://localhost:4000/api/weather/week?city=${city}`)
      .then(response => {
        setWeatherData(groupWeatherData(response.data.list));
        // Envía el estado del clima al componente padre
        onWeatherUpdate(response.data);
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

  // Función para agrupar los datos meteorológicos por día
  const groupWeatherData = (data) => {
    const groupedData = {};
    data.forEach(day => {
      const date = new Date(day.dt_txt.split(' ')[0]);
      const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }); // Formato MM/DD
      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = [];
      }
      groupedData[formattedDate].push(day);
    });
    return Object.values(groupedData);
  };

  return (
    <div className="week-card">
      <div className="weather-cards">
        {weatherData ? (
          weatherData.map((day, index) => (
            <div key={index} className="weather-card">
              {day.map((dayData, subIndex) => (
                <div key={subIndex}>
                  <p className="date">{dayData.dt_txt}</p>
                  <p className="temperature">Temperature: {dayData.main.temp}°C</p>
                  <p className="weather-description">Weather: {dayData.weather[0].description}</p>
                  <div className="additional-info">
                    <p><WiHumidity /> Humidity: {dayData.main.humidity}%</p>
                    <p><WiStrongWind /> Wind Speed: {dayData.wind.speed} m/s</p>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Week;
