import React from "react";

function Calendar({ days, currentDay, setCurrentDay }) {
  const current = new Date();
  console.warn(currentDay);

  return (
    <div className="calendar-button">
      {days.globalWeather &&
        days.globalWeather.daily.precipitation_sum.map((_, index) => {
          const keyToGive = `calendar button ${index}`;
          return (
            <button
              onClick={() => setCurrentDay(index)}
              type="button"
              key={keyToGive}
            >
              {index === 0
                ? "today"
                : `${current.getDate() + index}/${current.getMonth() + 1}`}
            </button>
          );
        })}
    </div>
  );
}

export default Calendar;
