import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, type }) {
  const getIcon = () => {
    switch(type) {
      case 'ophthalmologist':
        return '👁️';
      case 'cardiologist':
        return '❤️';
      case 'neurologist':
        return '🧠';
      default:
        return '🏥';
    }
  };

  return (
    <div className="simple-appointment-card">
      <div className="appointment-icon">{getIcon()}</div>
      <div className="appointment-info">
        <h5 className="appointment-title">{title}</h5>
        <p className="appointment-time">{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;