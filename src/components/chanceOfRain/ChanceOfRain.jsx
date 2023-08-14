import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Box, Slider, Stack } from "@mui/material";
import { useState } from "react";
import RainTime from "./RainTime";
import "./style.scss";

const ChanceOfRain = () => {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="ChanceOfRain__">
      <span>Chance of Rain</span>
      {/* insert chart */}
      <Stack direction="column">
        <Box sx={{ width: 200 }}>
          <RainTime />
          {/* <Slider disabled defaultValue={58} aria-label="Disabled slider" />
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
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
