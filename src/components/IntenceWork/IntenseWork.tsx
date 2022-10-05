import React from "react";
import "./intenseWork.scss";
import arrowDown from "../../assets/imgs/triangle-down.png";
import arrowUp from "../../assets/imgs/triangle-up.png";

function IntenseWork() {
  return (
    <div className="intense-work container">
      <h1>Intense work</h1>
      <p>Write down the time, you plan to dedicate to work and nothing else.</p>
      <div className="intense-work__timer">
        <button className="intense-work__timer__minus-mins">
          <img src={arrowDown} alt="to add minutes" />
        </button>
        <div className="intense-work__timer__minutes">30</div>
        <button className="intense-work__timer__plus-mins">
          <img src={arrowUp} alt="to add minutes" />
        </button>
      </div>
      <div className="intense-work__timer__settings">
        <label className="break">
          Without breaks
          <input type="checkbox" />
          <span className="break__checkmark"></span>
        </label>
      </div>
      <div className="intense-work__timer__breaks">
        0 breaks for 30 minutes of work
      </div>
      <button className="intense-work__timer__start-btn">Start</button>
    </div>
  );
}

export default IntenseWork;
