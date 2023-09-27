"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const darkmode_1 = require("../../../../../../context/darkmode");
const react_1 = __importDefault(require("react"));
require("../style.scss");
const LightRain = () => {
    const darkModeContext = react_1.default.useContext(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode } = darkModeContext;
    const strokeColor = darkMode ? "#000" : "#fff";
    const line = {
        fill: "#56A0EE",
        stroke: strokeColor,
    };
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", width: "64", height: "64", viewBox: "0 0 64 64" },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("filter", { id: "blur", width: "200%", height: "200%" },
                react_1.default.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "3" }),
                react_1.default.createElement("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                react_1.default.createElement("feComponentTransfer", null,
                    react_1.default.createElement("feFuncA", { type: "linear", slope: "0.05" })),
                react_1.default.createElement("feMerge", null,
                    react_1.default.createElement("feMergeNode", null),
                    react_1.default.createElement("feMergeNode", { in: "SourceGraphic" })))),
        react_1.default.createElement("g", { filter: "url(#blur)", id: "rainy-4" },
            react_1.default.createElement("g", { transform: "translate(20,10)" },
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", Object.assign({ d: "M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" }, line, { "stroke-linejoin": "round", "stroke-width": "2", transform: "translate(-20,-11)" })))),
            react_1.default.createElement("g", { transform: "translate(37,45), rotate(10)" },
                react_1.default.createElement("line", { className: "am-weather-rain-1", stroke: "#56A0EE", "stroke-dasharray": "4,7", "stroke-linecap": "round", "stroke-width": "2", transform: "translate(-6,1)", x1: "0", x2: "0", y1: "0", y2: "8" })))));
};
exports.default = LightRain;
