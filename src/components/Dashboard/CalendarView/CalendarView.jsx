import React from "react";
import "./CalendarView.css";

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr className="calendar-days">
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
          <tr className="calendar-times">
            <td>10:00</td>
            <td>08:00</td>
            <td>12:00</td>
            <td>10:00</td>
            <td>-</td>
            <td>12:00</td>
            <td>-</td>
          </tr>
          <tr className="calendar-times">
            <td>11:00</td>
            <td className="zero-nine"> 09:00</td>
            <td>-</td>
            <td>13:00</td>
            <td>14:00</td>
            <td>14:00</td>
            <td>-</td>
          </tr>
          <tr className="calendar-times">
            <td>12:00</td>
            <td>10:00</td>
            <td>13:00</td>
            <td>-</td>
            <td>16:00</td>
            <td>15:00</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h4 className="appointments-title">Upcoming Appointments</h4>
      <div className="upcoming-appointments">
        <div id="card1" className="appointment-card">
          <div className="appointment-icon dentist">
            <span>D</span>
          </div>
          <div className="appointment-details">
            <h5 className="appointment-name">Dentist</h5>
            <p className="appointment-time">Today, 09:00 - 10:00</p>
            <strong>Dr Cameron Williamson</strong>
          </div>
        </div>
        <div className="appointment-card">
          <div className="appointment-icon physio">
            <span>P</span>
          </div>
          <div className="appointment-details">
            <h5 className="appointment-name">Physiotherapy Appointment</h5>
            <p className="appointment-time">Today, 13:00 - 14:00</p>
            <strong>Dr Kevin Djones</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
