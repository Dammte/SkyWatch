import React, { useState, useEffect } from 'react';
import './Time.css';
import { RiCalendar2Line } from 'react-icons/ri';

function Time() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="time-card">
      <div className="time-container">
        <p className="time">{currentTime}</p>
        <div className="date-container">
          <RiCalendar2Line className="calendar-icon" />
          <p className="date">{currentDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Time;
