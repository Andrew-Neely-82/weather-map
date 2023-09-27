import { DarkModeContext } from "../../../../../../context/darkmode";
import { line, svg } from "./index";
import React from "react";
import "../style.scss";

const CloudyDay1: React.FC = () => {
  const darkModeContext = React.useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;
  const theme = darkMode ? "#000" : "#fff";

  const path = { fill: "#56A0EE", stroke: theme };

  return (
    <svg {...svg}>
      <defs>
        <filter id="blur" width="200%" height="200%">
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
      <g filter="url(#blur)" id="cloudy-day-1">
        <g transform="translate(20,10)">
          <g transform="translate(0,16)">
            <g className="am-weather-sun">
              <g>
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
              <g transform="rotate(45)">
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
              <g transform="rotate(90)">
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
              <g transform="rotate(135)">
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
              <g transform="rotate(180)">
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
              <g transform="rotate(225)">
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
              <g transform="rotate(270)">
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
              <g transform="rotate(315)">
                <line stroke-linecap="round" stroke-width="2" {...line} />
              </g>
            </g>
            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2" />
          </g>
          <g className="am-weather-cloud-2">
            <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3 c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" {...path} />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CloudyDay1;
