import React from "react";
import "./AnatomySection.css";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
// import anatomyImage from '../../../assets/images/anatomy-placeholder.png';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="section-header">
        <h3 className="section-title">Anatomy Overview</h3>
        <button className="view-all">View All</button>
      </div>
      <div className="anatomy-content">
        <div className="anatomy-image-container">
          <img
            src="https://media.istockphoto.com/id/459951679/photo/male-anatomy-view.jpg?s=612x612&w=0&k=20&c=-T2Zk12yDJgrF3T2XPz80ThaC_vZKh-s7qCYQwXNAXA="
            alt="Human anatomy"
            className="anatomy-image"
          />
          <div className="anatomy-marker heart-marker">
            <div className="marker-dot"></div>
            <div className="marker-label">Healthy Heart</div>
          </div>
        
        </div>
      </div>
      <HealthStatusCards />
    </div>
  );
}

export default AnatomySection;
