import { Today, Tomorrow, SevenDay } from "./import";
import { useState } from "react";
import Switch from "./switch/Switch";
import ForecastOptions from "./forecastOptions/ForecastOptions";
import React from "react";

const ForecastContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ForecastContainer__">
      <div className="ForecastContainer__buttons-container">
        <ForecastOptions />
        <Switch />
      </div>
      <div className="ForecastContainer__container">
        {/* Today, Tomorrow, Next 7 days */}
        {/* switch */}
      </div>
      <Today />
      <Tomorrow />
      <SevenDay />
    </div>
  );
};

export default ForecastContainer;
