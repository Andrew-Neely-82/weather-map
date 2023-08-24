import { DarkModeContext } from "../../context/darkmode";
import { themeStyles } from "./index";
import { useContext } from "react";

const City = ({ country, city, condition, icon, temp }) => {
  const { darkMode } = useContext(DarkModeContext);

  const bg = darkMode ? themeStyles.light.background : themeStyles.dark.background;

  const Para = ({ className, style, text }) => (
    <p className={className} style={style}>
      {text}
    </p>
  );

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
