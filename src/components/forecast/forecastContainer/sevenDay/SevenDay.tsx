import { CloudyDayOne, LightRain, Lightning, PartlyCloudy, Rain } from "../../assets/svg/export";
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
      <Days style={titleStyle} day={"Wed"} condition={<LightRain />} temp={10} />
      <Days style={titleStyle} day={"Thu"} condition={<PartlyCloudy />} temp={10} />
      <Days style={titleStyle} day={"Fri"} condition={<PartlyCloudy />} temp={10} />
      <Days style={titleStyle} day={"Sat"} condition={<Lightning />} temp={10} />
      <Days style={titleStyle} day={"Sun"} condition={<Rain />} temp={10} />
      <CloudyDayOne />
    </div>
  );
};

export default SevenDay;
