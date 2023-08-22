import ChanceOfRain from "./components/chanceOfRain/ChanceOfRain";
import { DarkModeContext } from "./context/darkmode";
import { Forecast, Map } from "./components/export";
import { useContext } from "react";
import "./App.scss";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { bodyBackground, textColor, heading, bg } = themes(darkMode);

  const headings = document.getElementsByTagName("h3");
  const text = document.querySelectorAll("div, span, p");

  document.body.background = bodyBackground;
  document.getElementById("root").style.background = bodyBackground;

  const track = document.querySelectorAll(".MuiSwitch-track");
  const trackColor = darkMode ? "white" : "#2f2f2f";

  for (let i = 0; i < track.length; i++) {
    track[i].style.background = trackColor;
  }

  for (let i = 0; i < text.length; i++) {
    text[i].style.color = textColor;
  }

  for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = heading;
  }

  return (
    <div className="App_">
      <div className="content" style={{ background: bg }}>
        <Forecast />
        <ChanceOfRain />
        {/* <div className="GlobalContainer__"> */}
        <Map />
        {/* </div> */}
      </div>
    </div>
  );
};

export default App;

function themes(darkMode) {
  const bodyBackground = darkMode ? "white" : "#2F2F2F";
  const bg = darkMode ? "#efefef" : "#111014";
  const heading = darkMode ? "black" : "white";
  const textColor = darkMode ? "black" : "white";
  return { bodyBackground, textColor, heading, bg };
}
