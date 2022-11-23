import React from "react";
import Empire from "../../public/flags/Empire.png";

export default function DeathStarPopover() {
  return (
    <div className="DeathStar-glitch">
      <h2 className="popover-title">
        <i>DeathStar</i>
      </h2>
      <div className="popover-hour-time">
        <p className="popover-temp">
          <i className="glitch">Access Denied</i>
        </p>
        <p className="popover-time">
          <i className="glitch">Access Denied</i>
        </p>
      </div>
      <img src={Empire} alt="Empire Flag" />
      <p>Unauthorized</p>
    </div>
  );
}
