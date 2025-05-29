import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="section-header">
        <h3 className="section-title">Activity</h3>
        {/* <button className="view-all">View All</button> */}
        <p className="activity-summary">3 appointments on this week</p>

      </div>
      <div className="activity-content">
        {/* <p className="activity-summary">3 appointments on this week</p> */}
        <div className="activity-chart">
          <div className="chart-bars">
            <div className="chart-bar" style={{ height: '30%' }}></div>
            <div className="chart-bar" style={{ height: '60%' }}></div>
            <div className="chart-bar" style={{ height: '40%' }}></div>
            <div className="chart-bar" style={{ height: '80%' }}></div>
            <div className="chart-bar" style={{ height: '50%' }}></div>
            <div className="chart-bar" style={{ height: '70%' }}></div>
            <div className="chart-bar" style={{ height: '20%' }}></div>
          </div>
          <div className="chart-labels">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;