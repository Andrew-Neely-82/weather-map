import { DarkModeContext } from "../../../../context/darkmode";
import React, { useContext } from "react";

const Today: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;

  const titleStyle: React.CSSProperties = {
    color: darkMode ? "#fff" : "#000",
  };

  return (
    <div className="today__">
      <h5 className="today__day" style={titleStyle}>
        Today
      </h5>
    </div>
  );
};

export default Today;
