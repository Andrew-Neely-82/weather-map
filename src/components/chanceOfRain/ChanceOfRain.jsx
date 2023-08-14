import { Box, Stack } from "@mui/material";
import RainTimeSlider from "./RainTime";
import "./style.scss";

const ChanceOfRain = () => {
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
