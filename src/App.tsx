import React, { useContext } from "react";
import { DarkModeContext } from "./context/darkmode";
import { elementThemes, themes } from "./appfunctions";
import { ChanceOfRain, Forecast, Map, OtherCities } from "./components/export";
import "./App.scss";

const App: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
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
