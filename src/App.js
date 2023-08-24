import { ChanceOfRain, Forecast, Map, OtherCities } from "./components/export";
import { DarkModeContext } from "./context/darkmode";
import { elementThemes, themes } from "./appfunctions";
import { useContext } from "react";
import "./App.scss";

const App = () => {
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
