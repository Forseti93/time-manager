import React from "react";
import IntenseWork from "../IntenceWork/IntenseWork";
import "./unsignedMain.css";
import { useState, useEffect } from "react";
import BreaksControl from "../BreaksControl/BreaksControl";
import WorkDay from "../WorkDay/WorkDay";

interface Props {
  alarmsMode: string;
}

const Unsigned = (props: Props) => {
  // See App.tsx -> const alarmsMode: string[]
  // "Intense work",
  // "Breaks notifications",
  // "Plan all day",

  useEffect(() => {}, [props.alarmsMode]);

  return (
    <div className="unsigned">
      <h1 className="unsigned__heading">{props.alarmsMode}</h1>
    </div>
  );
};

export default Unsigned;
