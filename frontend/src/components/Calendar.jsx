import React, { useState } from "react";

function Calendar({ days, setCurrentDay }) {
  const current = new Date();
  const [daysIndex, setDaysIndex] = useState(0);

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

        {days.globalWeather &&
          days.globalWeather.daily.precipitation_sum
            .map((_, index) => {
              const keyToGive = `calendar button ${index}`;
              return (
                <button
                  className="benjamin-button"
                  onClick={() => setCurrentDay(index)}
                  type="button"
                  key={keyToGive}
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
