import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmode";

const City = ({ country, city, condition, icon, temp }) => {
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? "#fff" : "#fff";

  const Para = ({ className, text }) => (
    <p className={className} style={{ color: theme }}>
      {text}
    </p>
  );

  return (
    <div className="city-wrapper">
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
