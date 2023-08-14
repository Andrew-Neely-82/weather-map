import { Slider } from "@mui/material";

const RainTime = () => {
  return (
    <div className="RainTime__">
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      <p className="time time-1">10am</p>
    </div>
  );
};
export default RainTime;
