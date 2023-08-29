import { DarkModeContext } from "../../../../context/darkmode";
import React, { useContext, useState } from "react";
import { Button } from "@mui/material";

const ForecastOptions: React.FC = () => {
  const [buttonStates, setButtonStates] = useState([false, false, true]);
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) return null;

  const { darkMode } = darkModeContext;
  const theme = darkMode ? "#000" : "#fff";

  const handleButtonChecked = (index: any) => {
    if (buttonStates[index]) return;
    const updatedStates = buttonStates.map((state, i) => (i === index ? !state : false));
    setButtonStates(updatedStates);
  };

  const props = {
    style: { color: theme },
    variant: "text",
  };

  return (
    <div className="ForecastOptions__">
      <Button className={`forecast-btn ${buttonStates[0] ? "" : "unchecked"}`} {...props} onClick={() => handleButtonChecked(0)}>
        Today
      </Button>
      <Button className={`forecast-btn ${buttonStates[1] ? "" : "unchecked"}`} {...props} onClick={() => handleButtonChecked(1)}>
        Tomorrow
      </Button>
      <Button className={`forecast-btn ${buttonStates[2] ? "" : "unchecked"}`} {...props} onClick={() => handleButtonChecked(2)}>
        Next 7 days
      </Button>
    </div>
  );
};

export default ForecastOptions;
