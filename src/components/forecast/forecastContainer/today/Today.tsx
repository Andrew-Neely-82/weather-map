import { DarkModeContext } from "../../../../context/darkmode";
import React, { useContext } from "react";

// prettier-ignore
interface TodayProps { today: string; time?: string; temp?: string; feels?: string; wind? : string; pressure?: string; humidity?: string; sunrise?: string; sunset?: string;}

const Today: React.FC<TodayProps> = ({ today, time, temp, feels, wind, pressure, humidity, sunrise, sunset }) => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;

  const titleStyle: React.CSSProperties = {
    color: darkMode ? "#fff" : "#000",
  };

  return (
    <div className="today__">
      <span className="today__day" style={titleStyle}>
        {today}
      </span>
      <span className="today__day">{time}</span>
      <div className="today__day__weather-wrapper">
        <div>
          <span>{temp}*F</span>
        </div>
        <div>
          <span>Feels Like {feels}*F</span>
        </div>
        <div>
          <span>Wind {wind}</span>
        </div>
        <div>
          <span>Pressure {pressure}</span>
        </div>
        <div>
          <span>Humidity {humidity}</span>
        </div>
      </div>
      <div>
        <div>Sunrise: {sunrise}</div>
        <div>Sunset: {sunset}</div>
      </div>
    </div>
  );
};

export default Today;
