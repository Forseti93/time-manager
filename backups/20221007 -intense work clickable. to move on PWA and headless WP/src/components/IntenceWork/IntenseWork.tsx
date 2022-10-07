import React, { ChangeEvent, useRef } from "react";
import "./intenseWork.scss";
import arrowDown from "../../assets/imgs/triangle-down.png";
import arrowUp from "../../assets/imgs/triangle-up.png";
import { CPIntenseWork } from "../../common/interfaces";
import { useEffect } from "react";

function IntenseWork(props: CPIntenseWork) {
  const startBtn = useRef(null);

  useEffect(() => {
    console.log("IntenseWork changed");
  }, [props]);

  // to restrict min and max input(filter appied on "start" pressed)
  const minimumMinutes: number = 30;
  const maximumMinutes: number = 300;

  // // for updating props (for avoidint code duplicates)
  // function updateProps(newKev) {
  //   props.setAlarmsSettings((prev) => ({
  //     ...prev,
  //     minutes: maximumMinutes,
  //   }));
  // }

  //for 2 triangle buttons (+ and - time)
  function btnMinutes(changeOn: number): void {
    if (props.alarmsSettings.minutes <= minimumMinutes && changeOn < 0) {
      alert(`${minimumMinutes}min - minimum`);
      props.setAlarmsSettings((prev) => ({
        ...prev,
        minutes: minimumMinutes,
      }));
      return;
    }

    if (props.alarmsSettings.minutes >= maximumMinutes && changeOn > 0) {
      alert(`${maximumMinutes}min - maximum`);
      props.setAlarmsSettings((prev) => ({
        ...prev,
        minutes: maximumMinutes,
      }));
      return;
    }

    props.setAlarmsSettings((prev) => ({
      ...prev,
      minutes: prev.minutes + changeOn,
    }));
  }

  // to check if the digit or service button(Backspace\Enter...) was pressed on input
  function checkIsDigit(e: React.KeyboardEvent<HTMLInputElement>): void {
    console.log(e.key);

    if (
      !e.key.match(
        /\d|Backspace|Delete|Enter|ArrowLeft|ArrowUp|ArrowRight|ArrowDown|Tab/
      )
    ) {
      e.preventDefault();
      return;
    }
  }

  // for input between 2 triangle btns
  function inputMinutes(e: React.ChangeEvent<HTMLInputElement>): void {
    props.setAlarmsSettings((prev) => ({
      ...prev,
      minutes: Number(e.target.value),
    }));
  }

  // for toggling breaks checkbox
  function checkboxBreaks(
    e: React.FormEvent<HTMLLabelElement> | React.FormEvent<HTMLSpanElement>
  ): void {
    props.setAlarmsSettings((prev) => ({
      ...prev,
      breaks: !prev.breaks,
    }));
  }

  // final check of time before start alarm
  function handlerStartBtn() {
    const minutesValue = Number(
      (
        document.querySelector(
          ".intense-work__timer__minutes"
        ) as HTMLInputElement
      ).value
    );
    if (minutesValue > maximumMinutes) {
      props.setAlarmsSettings((prev) => ({
        ...prev,
        minutes: maximumMinutes,
      }));
    } else if (minutesValue < minimumMinutes) {
      props.setAlarmsSettings((prev) => ({
        ...prev,
        minutes: minimumMinutes,
      }));
    } else {
      props.setAlarmsSettings((prev) => ({
        ...prev,
        minutes: maximumMinutes,
      }));
    }
  }

  return (
    <div className="intense-work container">
      <h1>Intense work</h1>
      <p>Write down the time, you plan to dedicate to work and nothing else.</p>

      <div className="intense-work__timer">
        <button
          className="intense-work__timer__minus-mins"
          onClick={() => btnMinutes(-30)}
        >
          <img src={arrowDown} alt="to add minutes" />
        </button>
        <input
          className="intense-work__timer__minutes"
          value={props.alarmsSettings.minutes}
          onChange={inputMinutes}
          onKeyDown={checkIsDigit}
          ref={startBtn}
        />
        <span>minutes</span>
        <button
          className="intense-work__timer__plus-mins"
          onClick={() => btnMinutes(30)}
        >
          <img src={arrowUp} alt="to add minutes" />
        </button>
      </div>

      <div className="intense-work__timer__settings">
        <label className="break" onChange={(e) => checkboxBreaks(e)}>
          Without breaks
          <input type="checkbox" checked={props.alarmsSettings.breaks} />
          <span
            className="break__checkmark"
            onChange={(e) => checkboxBreaks(e)}
          ></span>
        </label>
      </div>

      <div className="intense-work__timer__breaks">
        0 breaks for 30 minutes of work
      </div>

      <button
        className="intense-work__timer__start-btn"
        onClick={handlerStartBtn}
      >
        Start
      </button>
    </div>
  );
}

export default IntenseWork;
