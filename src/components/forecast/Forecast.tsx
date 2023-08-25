import ForecastContainer from "./forecastContainer/ForecastContainer";
import React from "react";
import "./style.scss";

const Forecast: React.FC = () => {
  return (
    <div className="Forecast__">
      <ForecastContainer />
    </div>
  );
};

export default Forecast;
