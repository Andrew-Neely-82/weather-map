import { Box, Stack } from "@mui/material";
import RainTimeSlider from "./RainTime";
import "./style.scss";

const ChanceOfRain = () => {
  const rainTypes = ["Sunny", "Rainy", "Heavy"].sort();

  return (
    <div className="ChanceOfRain__">
      <Stack direction="column">
        <Box className="Box" sx={{ display: "flex", justifyContent: "space-between", width: 200 }}>
          <RainTimeSlider time="10am" percent={"5"} />
          <RainTimeSlider time="11am" percent={"10"} />
          <RainTimeSlider time="1pm" percent={"16"} />
          <RainTimeSlider time="2pm" percent={"36"} />
          <RainTimeSlider time="3pm" percent={"64"} />
          <RainTimeSlider time="4pm" percent={"82"} />
          <div className="background">
            {rainTypes.map((rainType, key) => (
              <div className="rainType" key={key}>
                <p>{rainType}</p>
                <div className="line">
                  <p>----------------------------</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Stack>
    </div>
  );
};

export default ChanceOfRain;
