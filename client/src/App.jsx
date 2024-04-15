import React, { useState, useEffect } from 'react';
import './App.css';
import Time from './Components/Time/Time.jsx';
import Today from './Components/Today/Today.jsx';
import Week from './Components/Week/Week.jsx'
import PlaylistBar from './Components/PlaylistBar/PlaylistBar.jsx';

import videoNubes from './Assets/clouds_video.mp4';
import videoTormenta from './Assets/storm_video.mp4';
import videoLluvia from './Assets/rain_video.mp4';
import videoNieve from './Assets/snow_video.mp4';
import videoNubesTormenta from './Assets/darkclouds_video.mp4';

function App() {
  const [weather, setWeather] = useState('Clouds');

  useEffect(() => {
  }, [weather]);

  const handleWeatherUpdate = (newWeather) => {
    console.log('Weather from Today component:', newWeather);
    setWeather(newWeather);
  };

  return (
    <div className="app-container">
      {/* Renderiza el video de fondo basado en el estado del clima */}
      {renderBackgroundVideo(weather)}
      <div className="top-container">
        <Today onWeatherUpdate={handleWeatherUpdate} />
        <Time />
        <PlaylistBar videoUrl="https://www.youtube.com/watch?v=jfKfPfyJRdk" />
      </div>
      <div className="bottom-container">
        <Week />
      </div>
    </div>
  );
}

// Función para renderizar el video de fondo basado en el estado del clima
function renderBackgroundVideo(weather) {
  switch (weather) {
    case 'Clouds':
      return <video autoPlay loop muted className="video-background"><source src={videoNubes} type="video/mp4" /></video>;
    case 'Rain':
      return <video autoPlay loop muted className="video-background"><source src={videoLluvia} type="video/mp4" /></video>;
    case 'Thunderstorm':
      return <video autoPlay loop muted className="video-background"><source src={videoTormenta} type="video/mp4" /></video>;
    case 'Snow':
      return <video autoPlay loop muted className="video-background"><source src={videoNieve} type="video/mp4" /></video>;
    case 'Drizzle':
      return <video autoPlay loop muted className="video-background"><source src={videoNubesTormenta} type="video/mp4" /></video>;
    default:
      return <video autoPlay loop muted className="video-background"><source src={videoNubes} type="video/mp4" /></video>; // Video por defecto
  }
}

export default App;
