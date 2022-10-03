import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Alarm } from "./interfaces";
import UnsignedLayout from "./layout/UnsignedLayout";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import IntenseWork from "./components/IntenceWork/IntenseWork";
import BreaksControl from "./components/BreaksControl/BreaksControl";
import WorkDay from "./components/WorkDay/WorkDay";

const allAlarms: Alarm[] = [
  { event: "work start", intervalHours: 8, intervalMinutes: 0 },
];

// NOTE: if change that const length - see component Sidebar -> .sidebar__btn -> onClick
const alarmsMode: string[] = [
  "Intense work",
  "Breaks notifications",
  "Plan all day",
];
// NOTE: if change that const length - see component Sidebar -> .sidebar__btn -> onClick
// NOTE: changes in volume images name will give errors
const volume: string[] = ["volume-quiet", "volume-medium", "volume-loud"];
const alarm = new Audio(require("./assets/sounds/work-or-break.mp3"));

const App: React.FC = () => {
  const [alarmsModeIndex, setAlarmsModeIndex] = useState<number>(1);
  const [volumeIndex, setVolumeIndex] = useState<number>(2);

  // FIXME: менять на тру в useEffect(() => setLoaded(true), [])
  useEffect(() => {
    playAlarm(volumeIndex, alarm);
  }, [volumeIndex]);

  function playAlarm(volumeLevel: number, sound: HTMLAudioElement) {
    if (volumeLevel === 0) {
      sound.volume = 0.333;
      sound.play();
    }
    if (volumeLevel === 1) {
      sound.volume = 0.666;
      sound.play();
    }
    if (volumeLevel === 2) {
      sound.volume = 1;
      sound.play();
    }
  }

  return (
    <div className="App">
        <UnsignedLayout
          setAlarmsModeIndex={setAlarmsModeIndex}
          volume={volume[volumeIndex]}
          setVolumeIndex={setVolumeIndex}
          alarmsMode={alarmsMode[alarmsModeIndex]}
        />
    </div>
  );
};

export default App;
