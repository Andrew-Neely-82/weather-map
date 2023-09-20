"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const darkmode_1 = require("../../../../../../context/darkmode");
const react_1 = __importDefault(require("react"));
const CloudyDay1 = () => {
    const darkModeContext = react_1.default.useContext(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode } = darkModeContext;
    return (react_1.default.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "64", height: "64", viewBox: "0 0 64 64" },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("filter", { id: "blur", width: "200%", height: "200%" },
                react_1.default.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "3" }),
                react_1.default.createElement("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                react_1.default.createElement("feComponentTransfer", null,
                    react_1.default.createElement("feFuncA", { type: "linear", slope: "0.05" })),
                react_1.default.createElement("feMerge", null,
                    react_1.default.createElement("feMergeNode", null),
                    react_1.default.createElement("feMergeNode", { in: "SourceGraphic" }))),
            react_1.default.createElement("style", { type: "text/css" }, `
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        `)),
        react_1.default.createElement("g", { filter: "url(#blur)", id: "cloudy-day-1" },
            react_1.default.createElement("g", { transform: "translate(20,10)" },
                react_1.default.createElement("g", { transform: "translate(0,16)" },
                    react_1.default.createElement("g", { className: "am-weather-sun" },
                        react_1.default.createElement("g", null,
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" })),
                        react_1.default.createElement("g", { transform: "rotate(45)" },
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" })),
                        react_1.default.createElement("g", { transform: "rotate(90)" },
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" })),
                        react_1.default.createElement("g", { transform: "rotate(135)" },
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" })),
                        react_1.default.createElement("g", { transform: "rotate(180)" },
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" })),
                        react_1.default.createElement("g", { transform: "rotate(225)" },
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" })),
                        react_1.default.createElement("g", { transform: "rotate(270)" },
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" })),
                        react_1.default.createElement("g", { transform: "rotate(315)" },
                            react_1.default.createElement("line", { fill: "none", stroke: "orange", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(0,9)", x1: "0", x2: "0", y1: "0", y2: "3" }))),
                    react_1.default.createElement("circle", { cx: "0", cy: "0", fill: "orange", r: "5", stroke: "orange", "stroke-width": "2" })),
                react_1.default.createElement("g", { className: "am-weather-cloud-2" },
                    react_1.default.createElement("path", { d: "M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z", fill: "#C6DEFF", stroke: "white", "stroke-linejoin": "round", "stroke-width": "1.2", transform: "translate(-20,-11)" }))))));
};
exports.default = CloudyDay1;
