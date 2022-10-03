import React from "react";
import Page from "../components/Unsigned/UnsignedMain";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import UnsignedMain from "../components/Unsigned/UnsignedMain";
import { Route, Routes } from "react-router-dom";

interface Props {
  setAlarmsModeIndex: React.Dispatch<React.SetStateAction<number>>;
  volume: string;
  setVolumeIndex: React.Dispatch<React.SetStateAction<number>>;
  alarmsMode: string;
}

function UnsignedUser(props: Props) {
  return (
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
        // children
      >
        <Route index element={<UnsignedMain alarmsMode={props.alarmsMode} />} />
        <Route element={<UnsignedMain alarmsMode={props.alarmsMode} />} />
        <Route element={<UnsignedMain alarmsMode={props.alarmsMode} />} />
      </Route>
    </Routes>
  );
}

export default UnsignedUser;
