import React from 'react';
import './DashboardOverview.css';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <h2 className="dashboard-title">Dashboard Overview</h2>
      <div className="overview-cards">
        <div className="overview-card">
          <h3 className="card-title">Total Patients</h3>
          <p className="card-value">1,248</p>
          <p className="card-change positive">+12% this month</p>
        </div>
        <div className="overview-card">
          <h3 className="card-title">Appointments</h3>
          <p className="card-value">56</p>
          <p className="card-change positive">+5% this week</p>
        </div>
        <div className="overview-card">
          <h3 className="card-title">Pending Tests</h3>
          <p className="card-value">24</p>
          <p className="card-change negative">-2% this week</p>
        </div>
        <div className="overview-card">
          <h3 className="card-title">Completed</h3>
          <p className="card-value">1,024</p>
          <p className="card-change positive">+10% this month</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;