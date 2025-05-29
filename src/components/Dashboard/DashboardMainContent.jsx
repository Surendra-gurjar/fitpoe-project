import React from "react";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import "./DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <DashboardOverview />
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <AnatomySection />
          {/* <HealthStatusCards /> */}
          <ActivityFeed />
        </div>
        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;

// import React from 'react';

// import './DashboardMainContent.css';
// import HealthStatus from './HealthStatusCards/HealthStatusCards';
// import CalendarView from './CalendarView/CalendarView';
// import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';

// function DashboardContent() {
//   return (

//     <div className="dashboard-content">
//       <h2>Dashboard</h2>

//       <div className="dashboard-grid">
//         <div className="health-status-section">
//           <HealthStatus/>
//         </div>

//         <div className="calendar-section">
//           <CalendarView/>
//         </div>

//         <div className="schedule-section">
//           <UpcomingSchedule/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardContent;
