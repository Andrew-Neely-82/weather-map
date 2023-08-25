import { DarkModeContext } from "../../context/darkmode";
import { Slider, Stack } from "@mui/material";
import { propValues } from "./index";
import { useContext } from "react";
import React from "react";

interface RainTimeSliderProps {
  percent: number;
  time: string;
}

const RainTimeSlider: React.FC<RainTimeSliderProps> = ({ percent, time }) => {
  const { darkMode } = useContext(DarkModeContext);
  const timeColor = darkMode ? "black" : "#919191";
  const props = propValues(percent);

  return (
    <div className="ChanceOfRain__wrapper">
      <Stack {...props.stack}>
        <Slider {...props.slider} sx={{ filter: "drop-shadow(0 0 1px black)" }} aria-label="Temperature" disabled />
        <div className="ChanceOfRain__wrapper-span">
          <span style={{ color: timeColor }}>{time}</span>
        </div>
      </Stack>
    </div>
  );
};

export default RainTimeSlider;
