import React from 'react';
import './HealthStatusCards.css';
import { HealthData } from '../../../Data/healthData';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {HealthData.map((item) => (
        <div key={item.id} className="health-card">
          <img src= {item.icon} className="health-icon" style={{ backgroundColor: item.color }}>
           
          </img>
          <div className="health-info">
            <h4 className="health-title">{item.title}</h4>
            <p className="health-date">{item.date}</p>
          </div>
          <div className="health-status">
            <span className={`status-badge ${item.status}`}>{item.statusText}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;

