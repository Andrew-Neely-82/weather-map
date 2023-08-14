import { Box, Stack } from "@mui/material";
import RainTimeSlider from "./RainTime";
import { useState } from "react";
import "./style.scss";

const ChanceOfRain = () => {
  const [value, setValue] = useState(null);

  const handleValue = (val) => {
    setValue(val);
  };

  return (
    <div className="ChanceOfRain__">
      <h3 className="ChanceOfRain__title">Chance of Rain</h3>
      <Stack direction="column">
        <Box sx={{ display: "flex", justifyContent: "space-between", width: 200 }}>
          <RainTimeSlider time="10am" percent={"5"} />
          <RainTimeSlider time="11am" percent={"10"} />
          <RainTimeSlider time="1pm" percent={"16"} />
          <RainTimeSlider time="2pm" percent={"36"} />
          <RainTimeSlider time="3pm" percent={"64"} />
        </Box>
      </Stack>
    </div>
  );
};

export default ChanceOfRain;

// ! Notes

// * https://mui.com/material-ui/react-slider/ - sliders
// * Use Mui Sliders / make vertical and adjust with rain percentages
// * bubble is capable of display: none
