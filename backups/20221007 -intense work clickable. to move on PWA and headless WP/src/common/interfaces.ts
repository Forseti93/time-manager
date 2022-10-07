// CP - component props
export interface CPUnsignedUser {
  setAlarmsModeIndex: React.Dispatch<React.SetStateAction<number>>;
  volume: string;
  setVolumeIndex: React.Dispatch<React.SetStateAction<number>>;
  alarmsMode: string;
}

export interface CPIntenseWork {
  alarmsSettings: {
    minutes: number;
    breaks: boolean;
  };
  setAlarmsSettings: React.Dispatch<
    React.SetStateAction<{
      minutes: number;
      breaks: boolean;
    }>
  >;
}
