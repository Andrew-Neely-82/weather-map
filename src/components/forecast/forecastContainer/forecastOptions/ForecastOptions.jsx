import { DarkModeContext } from "../../../../context/darkmode";
import { useContext, useState } from "react";
import { Button } from "@mui/material";

const ForecastOptions = () => {
  const [buttonStates, setButtonStates] = useState([false, false, true]);
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? "#000" : "#fff";

  const handleButtonChecked = (index) => {
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
