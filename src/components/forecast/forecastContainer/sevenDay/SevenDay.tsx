import { DarkModeContext } from "../../../../context/darkmode";
import React, { useContext, useState } from "react";
import Days from "./days/Days";

const SevenDay: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;

  const titleStyle: React.CSSProperties = {
    color: darkMode ? "#000" : "#fff",
  };
  // const [days, setDays] = useState(Array(6).fill(null));

  return (
    <div className="SevenDay__">
      {/* {days.map((day, key) => {
        <Days key={key} />;
      })} */}

      <Days style={titleStyle} day={"Tue"} condition={"Isolate storms"} temp={10} />
      <Days style={titleStyle} day={"Wed"} condition={"light rain"} temp={10} />
      <Days style={titleStyle} day={"Thu"} condition={"partly cloudy"} temp={10} />
      <Days style={titleStyle} day={"Fri"} condition={"partly cloudy"} temp={10} />
      <Days style={titleStyle} day={"Sat"} condition={"thunder storms"} temp={10} />
      <Days style={titleStyle} day={"Sun"} condition={"rain"} temp={10} />
    </div>
  );
};

export default SevenDay;

// * uncomment when weather is figured out
