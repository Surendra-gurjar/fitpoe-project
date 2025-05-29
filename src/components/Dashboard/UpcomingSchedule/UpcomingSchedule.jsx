

import React from "react";
import "./UpcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>

      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="appointment-row">
          <div className="appointment">
            <div className="checkup-image">
              <p className="appointment-title">Health checkup complete</p>
              <img
                src="https://t4.ftcdn.net/jpg/02/81/64/85/360_F_281648504_kpuzmc5PUuLiOcIs5ghnUp8nFaHIZV6A.jpg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <p className="appointment-time">11:00 AM</p>
          </div>
          <div className="appointment">
            <div className="checkup-image">
              <p className="appointment-title">Ophthalmologist</p>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/030/687/158/small/eyes-2d-cartoon-illustraton-on-white-background-high-quality-free-photo.jpg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <p className="appointment-time">14:00 PM</p>
          </div>
        </div>

        <div className="schedule-day">
          <h4>On Saturday</h4>
          <div className="appointment-row">
            <div className="appointment">
              <div className="checkup-image">
                <p className="appointment-title">Cardiologist</p>
                <img
                  src="https://png.pngtree.com/png-vector/20220411/ourmid/pngtree-red-3d-heart-emoji-realistic-shadow-png-image_4539964.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <p className="appointment-time">12:00 AM</p>
            </div>
            <div className="appointment">
              <div className="checkup-image">
                <p className="appointment-title">Neurologist</p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzt2_vIhRrj40PTnwMkp6Ift02Gv_RvbIezw&s"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <p className="appointment-time">16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
