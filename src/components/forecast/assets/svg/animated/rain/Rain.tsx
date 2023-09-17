import { DarkModeContext } from "../../../../../../context/darkmode";
import React from "react";
import "./style.scss";

const Rain: React.FC = () => {
  const darkModeContext = React.useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;

  const svg = {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "100%",
    viewBox: "0 0 64 64",
  };

  const path = {
    fill: "#57A0EE",
    stroke: `${darkMode ? "black" : "white"}`,
    strokeWidth: "2",
    transform: "translate(-20,-11)",
  };

  const line = {
    fill: "none",
    strokeDasharray: "4,4",
    stroke: "#91C0F8",
    strokeWidth: 2,
  };

  return (
    <svg {...svg}>
      <defs>
        <filter id="blur" width="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#blur)" id="rainy-6">
        <g transform="translate(20,10)">
          <g>
            <path {...path} d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3 c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" strokeLinejoin="round" />
          </g>
        </g>
        <g transform="translate(31,46), rotate(10)">
          <line className="am-weather-rain-1" strokeLinecap="round" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" {...line} />
          <line className="am-weather-rain-2" strokeLinecap="round" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" {...line} />
          <line className="am-weather-rain-1" strokeLinecap="round" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" {...line} />
        </g>
      </g>
    </svg>
  );
};

export default Rain;
