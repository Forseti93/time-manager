import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import IntenseWork from "../components/IntenceWork/IntenseWork";
import NoMatch from "../components/NoMatch/NoMatch";
import BreaksControl from "../components/BreaksControl/BreaksControl";
import WorkDay from "../components/WorkDay/WorkDay";
import "./unsignedLayout.css";

interface Props {
  setAlarmsModeIndex: React.Dispatch<React.SetStateAction<number>>;
  volume: string;
  setVolumeIndex: React.Dispatch<React.SetStateAction<number>>;
  alarmsMode: string;
}

function UnsignedUser(props: Props) {
  useEffect(() => {}, [props.alarmsMode]);
  return (
    <div className="unsigned">
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <Sidebar
                alarmsMode={props.alarmsMode}
                setAlarmsModeIndex={props.setAlarmsModeIndex}
                volume={props.volume}
                setVolumeIndex={props.setVolumeIndex}
              />
            }
          >
            <Route path="/" element={<Navigate to="/Intense_work" replace={true} />} />
            <Route path="Intense_work" element={<IntenseWork />} />
            <Route path="Breaks_notifications" element={<BreaksControl />} />
            <Route path="Plan_all_day" element={<WorkDay />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default UnsignedUser;
