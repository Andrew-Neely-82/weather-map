import { DarkModeContext } from "../../context/darkmode";
import { Box, Stack } from "@mui/material";
import RainTimeSlider from "./RainTime";
import { useContext } from "react";
import React from "react";
import "./style.scss";

const ChanceOfRain = () => {
  const rainTypes = ["Heavy", "Rainy", "Sunny"];
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) return null;

  const { darkMode } = darkModeContext;
  const color = darkMode ? "#000" : "#919191";

  return (
    <div className="ChanceOfRain__">
      <h3>Chance of Rain</h3>
      <Stack direction="column">
        <Box className="Box" sx={{ display: "flex", justifyContent: "space-between", width: 200 }}>
          <RainTimeSlider time="10am" percent={5} />
          <RainTimeSlider time="11am" percent={10} />
          <RainTimeSlider time="1pm" percent={16} />
          <RainTimeSlider time="2pm" percent={36} />
          <RainTimeSlider time="3pm" percent={64} />
          <RainTimeSlider time="4pm" percent={82} />
          <div className="background">
            {rainTypes.map((rainType, key) => (
              <div className="rainType" key={key}>
                <p style={{ color }}>{rainType}</p>
                <div className="line">
                  <hr style={{ color }} />
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
