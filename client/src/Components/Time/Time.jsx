import React, { useState, useEffect } from 'react';
import './Time.css';

function Time() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-card">
      <h2>Current Time</h2>
      <p>{currentDateTime}</p>
    </div>
  );
}

export default Time;
