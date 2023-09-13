import ForecastOptions from "./forecastOptions/ForecastOptions";
import { Today, Tomorrow, SevenDay } from "./import";
import Switch from "./switch/Switch";
import { useState } from "react";
import React from "react";

const ForecastContainer = () => {
  const [open, setOpen] = useState(false);

  const props = { today: "Monday", time: "11:42PM", temp: "16", feels: "12", wind: "NE", pressure: "30.12", humidity: "80" };

  return (
    <div className="ForecastContainer__">
      <div className="ForecastContainer__buttons-container">
        <ForecastOptions />
        <Switch />
      </div>
      <div className="ForecastContainer__container">
        <Today {...props} />
        <Tomorrow />
        <SevenDay />
      </div>
    </div>
  );
};

export default ForecastContainer;
