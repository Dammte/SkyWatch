import React, { useState } from 'react';
import './App.css';
import Time from './Components/Time/Time.jsx';
import Today from './Components/Today/Today.jsx';

import videoNubes from './Assets/clouds_video.mp4';
import videoTormenta from './Assets/storm_video.mp4';
import videoLluvia from './Assets/skyrain_video.mp4';
import videoNieve from './Assets/snow_video.mp4';
import videoNubesTormenta from './Assets/darkclouds_video.mp4';

function App() {
  const [weather, setWeather] = useState(null);

  const handleWeatherUpdate = (newWeather) => {
    setWeather(newWeather);
  };

  const selectBackgroundVideo = () => {
    let selectedVideo = '';
    switch (weather) {
      case 'soleado':
        selectedVideo = '';
        break;
      case 'lluvioso':
        selectedVideo = <video autoPlay loop muted className="video-background"><source src={videoLluvia} type="video/mp4" /></video>;
        break;
      case 'tormenta':
        selectedVideo = <video autoPlay loop muted className="video-background"><source src={videoTormenta} type="video/mp4" /></video>;
        break;
      case 'nevado':
        selectedVideo = <video autoPlay loop muted className="video-background"><source src={videoNieve} type="video/mp4" /></video>;
        break;
      case 'nubes_tormenta':
        selectedVideo = <video autoPlay loop muted className="video-background"><source src={videoNubesTormenta} type="video/mp4" /></video>;
        break;
      default:
        selectedVideo = <video autoPlay loop muted className="video-background"><source src={videoNubes} type="video/mp4" /></video>; // Video por defecto
        break;
    }
    console.log('Selected video:', selectedVideo); // Verifica el video seleccionado
    return selectedVideo;
  };
  

  return (
    <div className="app-container">
      {selectBackgroundVideo()}
      <Today onWeatherUpdate={handleWeatherUpdate} />
      <Time />
    </div>
  );
}

export default App;
