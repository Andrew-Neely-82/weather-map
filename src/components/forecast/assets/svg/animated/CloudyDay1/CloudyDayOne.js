"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const darkmode_1 = require("../../../../../../context/darkmode");
const index_1 = require("./index");
const react_1 = __importDefault(require("react"));
require("../style.scss");
const CloudyDay1 = () => {
    const darkModeContext = react_1.default.useContext(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode } = darkModeContext;
    const theme = darkMode ? "#000" : "#fff";
    const path = { fill: "#56A0EE", stroke: theme };
    return (react_1.default.createElement("svg", Object.assign({}, index_1.svg),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("filter", { id: "blur", width: "200%", height: "200%" },
                react_1.default.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "3" }),
                react_1.default.createElement("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                react_1.default.createElement("feComponentTransfer", null,
                    react_1.default.createElement("feFuncA", { type: "linear", slope: "0.05" })),
                react_1.default.createElement("feMerge", null,
                    react_1.default.createElement("feMergeNode", null),
                    react_1.default.createElement("feMergeNode", { in: "SourceGraphic" })))),
        react_1.default.createElement("g", { filter: "url(#blur)", id: "cloudy-day-1" },
            react_1.default.createElement("g", { transform: "translate(20,10)" },
                react_1.default.createElement("g", { transform: "translate(0,16)" },
                    react_1.default.createElement("g", { className: "am-weather-sun" },
                        react_1.default.createElement("g", null,
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line))),
                        react_1.default.createElement("g", { transform: "rotate(45)" },
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line))),
                        react_1.default.createElement("g", { transform: "rotate(90)" },
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line))),
                        react_1.default.createElement("g", { transform: "rotate(135)" },
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line))),
                        react_1.default.createElement("g", { transform: "rotate(180)" },
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line))),
                        react_1.default.createElement("g", { transform: "rotate(225)" },
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line))),
                        react_1.default.createElement("g", { transform: "rotate(270)" },
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line))),
                        react_1.default.createElement("g", { transform: "rotate(315)" },
                            react_1.default.createElement("line", Object.assign({ "stroke-linecap": "round", "stroke-width": "2" }, index_1.line)))),
                    react_1.default.createElement("circle", { cx: "0", cy: "0", fill: "orange", r: "5", stroke: "orange", "stroke-width": "2" })),
                react_1.default.createElement("g", { className: "am-weather-cloud-2" },
                    react_1.default.createElement("path", Object.assign({ d: "M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3 c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z", "stroke-linejoin": "round", "stroke-width": "1.2", transform: "translate(-20,-11)" }, path)))))));
};
exports.default = CloudyDay1;
