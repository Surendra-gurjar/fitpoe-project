import React from 'react';
import { healthData } from '../../../data/healthData';
import './HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthData.map((item) => (
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


// import React from 'react';
// import './HealthStatusCards.css';

// function HealthStatus() {
//   return (
//     <div className="health-status">
//       <h3>Activity</h3>
//       <div className="status-cards">
//         <div className="status-card">
//           <h4>Healthy Heart</h4>
//           <div className="status-indicator good"></div>
//         </div>
//         <div className="status-card">
//           <h4>Healthy Lungs</h4>
//           <div className="status-indicator good"></div>
//         </div>
//         <div className="status-card">
//           <h4>Bone</h4>
//           <div className="status-indicator warning"></div>
//         </div>
//         <div className="status-card">
//           <p className="status-date">Date: 26 Oct 2021</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HealthStatus;