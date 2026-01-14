import React from "react";

export default function Timetable() {
  return (
    <section id="horarios" className="timetable-section">
      <div className="container">
        <h3 className="timetable-title">Horarios</h3>
        <div className="timetable-content">
            <img src="/images/photos/timeline_h.svg" alt="Horarios del evento" className="timetable-img timetable-desktop" />
            <img src="/images/photos/timeline_v.png" alt="Horarios del evento" className="timetable-img timetable-mobile" />
        </div>
      </div>
    </section>
  );
}
