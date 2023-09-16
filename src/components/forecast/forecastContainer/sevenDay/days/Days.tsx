import React, { useContext } from "react";
import { DarkModeContext } from "../../../../../context/darkmode";

//prettier-ignore
interface Props { day: string; condition: any; temp: number; style?: React.CSSProperties; Sunset?: any;}

const Days: React.FC<Props> = ({ style, day, condition, temp }) => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;

  const bg: React.CSSProperties = {
    background: darkMode ? "#fff" : "#1b1b1d",
  };
  return (
    <div className="Day__" style={bg}>
      <span style={style}>{day}</span>
      <hr />
      <span style={style}>{condition}</span>
      <span style={style}>{temp}°F</span>
    </div>
  );
};

export default Days;
