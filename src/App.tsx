import { ChanceOfRain, Forecast, Map, OtherCities } from "./components/export";
import { elementThemes, themes } from "./appfunctions";
import { DarkModeContext } from "./context/darkmode";
import React, { useContext } from "react";
import "./App.scss";

const App: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;

  const { darkMode } = darkModeContext;
  const { bodyBackground, textColor, heading, bg } = themes(darkMode);
  elementThemes(bodyBackground, darkMode, textColor, heading);

  return (
    <div className="App_">
      <div className="content" style={{ background: bg }}>
        <Forecast />
        <ChanceOfRain />
        <Map />
        <OtherCities />
      </div>
    </div>
  );
};

export default App;
