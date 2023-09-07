import ForecastOptions from "./forecastOptions/ForecastOptions";
import { Today, Tomorrow, SevenDay } from "./import";
import Switch from "./switch/Switch";
import { useState } from "react";
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
        <Today />
        <Tomorrow />
        <SevenDay />
      </div>
    </div>
  );
};

export default ForecastContainer;
