import { DarkModeContext } from "../../context/darkmode";
import React, { useContext } from "react";
import { themeStyles } from "./index";

interface ParaProps {
  className?: string;
  style?: React.CSSProperties;
  text: string;
}

const Para: React.FC<ParaProps> = ({ className, style, text }) => (
  <p className={className} style={style}>
    {text}
  </p>
);

interface CityProps {
  country: string;
  city: string;
  condition: string;
  icon: string;
  temp: number;
}

const City: React.FC<CityProps> = ({ country, city, condition, icon, temp }) => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    // Handle the case where the context is not available
    return null;
  }

  const { darkMode } = darkModeContext;

  const bg = darkMode ? themeStyles.light.background : themeStyles.dark.background;

  return (
    <div className="city-wrapper" style={{ background: bg }}>
      <div className="city-container">
        <Para className="country" text={country} />
        <Para className="city" text={city} />
        <Para className="condition" text={condition} />
      </div>
      <div className="weather-condition-container">
        <Para className="weather-condition" text={icon} />
        <Para className="temperature" text={`${temp}°F`} />
      </div>
    </div>
  );
};

export default City;
