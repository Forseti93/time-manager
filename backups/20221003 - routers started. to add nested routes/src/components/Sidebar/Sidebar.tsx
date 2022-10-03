import React from "react";
import unsignedUser from "../../assets/imgs/user-unsigned.png";
import modes from "../../assets/imgs/modes.png";
import gitHub from "../../assets/imgs/github.png";
import "./sidebar.css";
import { Link } from "react-router-dom";

interface Props {
  alarmsMode: String;
  setAlarmsModeIndex: React.Dispatch<React.SetStateAction<number>>;
  volume: string;
  setVolumeIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <nav className="sidebar__links">
        <Link className="sidebar__btn" to="#">
          <span className="sidebar__hover-indication"></span>
          <img
            className="sidebar__img"
            src={unsignedUser}
            alt="unsigned user"
          />
          <span className="sidebar__hover-text">User</span>
        </Link>
        <Link
          className="sidebar__btn"
          to={`/${props.alarmsMode}`}
          onClick={() =>
            props.setAlarmsModeIndex((prev: number) => {
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
        </Link>
        <Link
          className="sidebar__btn"
          to="#"
          onClick={() =>
            props.setVolumeIndex((prev) => {
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
            src={require(`../../assets/imgs/${props.volume}.png`)}
            alt="Volume"
          />
          <span className="sidebar__hover-text">Volume</span>
        </Link>
        <Link
          className="sidebar__btn"
          to="https://github.com/Forseti93/time-manager-app"
          target="_blank"
        >
          <span className="sidebar__hover-indication"></span>
          <img className="sidebar__img" src={gitHub} alt="Project's GitHub" />
          <span className="sidebar__hover-text">GitHub</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
