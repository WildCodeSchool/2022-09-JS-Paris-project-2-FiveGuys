import React, { useState } from "react";
import "./Calendar.css";

function Calendar({ setCurrentDay, currentDay }) {
  const current = new Date();
  const [daysIndex, setDaysIndex] = useState(0);
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <div className="calendar-scroll">
      <div className="calendar-button">
        <button
          type="button"
          className="calendar-arrow"
          disabled={daysIndex === 0}
          onClick={() => setDaysIndex(daysIndex - 1)}
        >
          &#129080;
        </button>

        {days
          .map((day, index) => {
            return (
              <button
                className={`benjamin-button ${
                  currentDay === index && "active"
                }`}
                onClick={() => setCurrentDay(index)}
                type="button"
                key={day}
              >
                {index === 0
                  ? "today"
                  : `${current.getDate() + index}/${current.getMonth() + 1}`}
              </button>
            );
          })
          .slice(daysIndex, daysIndex + 4)}

        <button
          type="button"
          className="calendar-arrow"
          disabled={daysIndex === 3}
          onClick={() => setDaysIndex(daysIndex + 1)}
        >
          &#129082;
        </button>
      </div>
    </div>
  );
}

export default Calendar;
