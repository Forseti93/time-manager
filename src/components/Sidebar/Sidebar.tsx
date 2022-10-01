import React from "react";
import unsignedUser from "../../assets/imgs/user-unsigned.png";
import modes from "../../assets/imgs/modes.png";
import gitHub from "../../assets/imgs/github.png";
import "./sidebar.css";

interface Props {
  setAlarmsModeIndex: React.Dispatch<React.SetStateAction<number>>;
  volume: string;
  setVolumeIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<Props> = ({
  setAlarmsModeIndex,
  volume,
  setVolumeIndex,
}) => {
  return (
    <div className="sidebar">
      <a className="sidebar__btn" href="#">
        <span className="sidebar__hover-indication"></span>
        <img className="sidebar__img" src={unsignedUser} alt="unsigned user" />
        <span className="sidebar__hover-text">User</span>
      </a>
      <a
        className="sidebar__btn"
        href="#"
        onClick={() =>
          setAlarmsModeIndex((prev) => {
            if (prev >= 2) {
              return 0;
            } else {
              return prev + 1;
            }
          })
        }
      >
        <span className="sidebar__hover-indication"></span>
        <img className="sidebar__img" src={modes} alt="Modes for alarms" />
        <span className="sidebar__hover-text">Next mode</span>
      </a>
      <a
        className="sidebar__btn"
        href="#"
        onClick={() =>
          setVolumeIndex((prev) => {
            if (prev >= 2) {
              return 0;
            } else {
              return prev + 1;
            }
          })
        }
      >
        <span className="sidebar__hover-indication"></span>
        <img
          className="sidebar__img"
          src={require(`../../assets/imgs/${volume}.png`)}
          alt="Volume"
        />
        <span className="sidebar__hover-text">Volume</span>
      </a>
      <a
        className="sidebar__btn"
        href="https://github.com/Forseti93/time-manager-app"
        target="_blank"
      >
        <span className="sidebar__hover-indication"></span>
        <img className="sidebar__img" src={gitHub} alt="Project's GitHub" />
        <span className="sidebar__hover-text">GitHub</span>
      </a>
    </div>
  );
};

export default Sidebar;
