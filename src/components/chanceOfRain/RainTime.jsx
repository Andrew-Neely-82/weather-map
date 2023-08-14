import { Slider, Stack } from "@mui/material";
import { propValues } from "./index";

const RainTimeSlider = ({ percent, time }) => {
  const props = propValues(percent);

  return (
    <div className="ChanceOfRain__wrapper">
      <Stack {...props.stack}>
        <Slider {...props.slider} aria-label="Temperature" disabled />
        <div className="ChanceOfRain__wrapper-span">
          <span>{time}</span>
        </div>
      </Stack>
    </div>
  );
};

export default RainTimeSlider;
