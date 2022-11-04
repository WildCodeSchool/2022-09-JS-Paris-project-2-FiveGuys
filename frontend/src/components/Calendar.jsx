import React from "react";

function Calendar({ days }) {
  const current = new Date();

  return (
    <div className="calendar-button">
      {days.globalWeather &&
        days.globalWeather.daily.precipitation_sum.map((_, index) => {
          const keyToGive = `calendar button ${index}`;
          return (
            <button type="button" key={keyToGive}>
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
