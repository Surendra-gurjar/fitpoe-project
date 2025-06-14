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
