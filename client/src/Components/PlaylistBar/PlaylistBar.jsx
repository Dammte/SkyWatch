import React from 'react';
import './PlaylistBar.css';

const extractYouTubeId = (url) => {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
  
  const match = url.match(regExp);

  return match ? match[1] : null;
};

const YouTubePlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return <div className="playlist-bar">Video not found</div>;
  }

  const videoId = extractYouTubeId(videoUrl);

  return (
    <div className="playlist-bar">
      <div className="video-container">
        <iframe 
          className="youtube-player" 
          title="YouTube Video Player"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

const PlaylistBar = ({ videoUrl }) => {
  return (
    <div>
      <h2 className="playlist-title"></h2>
      <YouTubePlayer videoUrl={videoUrl} />
    </div>
  );
}

export default PlaylistBar;
