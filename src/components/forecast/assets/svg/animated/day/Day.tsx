import { line, svg } from "./index";
import React from "react";
import "./style.scss";

const Day: React.FC = () => {
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
      <g filter="url(#blur)" id="day">
        <g transform="translate(32,32)">
          <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
            <g>
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
            <g transform="rotate(45)">
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
            <g transform="rotate(90)">
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
            <g transform="rotate(135)">
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
            <g transform="rotate(180)">
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
            <g transform="rotate(225)">
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
            <g transform="rotate(270)">
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
            <g transform="rotate(315)">
              <line {...line} stroke-linecap="round" stroke-width="2" />
            </g>
          </g>
          <circle cx="0" cy="0" fill="orange" r="5" stroke-width="2" />
        </g>
      </g>
    </svg>
  );
};

export default Day;
