"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const darkmode_1 = require("../../context/darkmode");
const material_1 = require("@mui/material");
const index_1 = require("./index");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const RainTimeSlider = ({ percent, time }) => {
    const darkModeContext = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    const darkMode = (darkModeContext === null || darkModeContext === void 0 ? void 0 : darkModeContext.darkMode) || false;
    const timeColor = darkMode ? "black" : "#919191";
    const props = (0, index_1.propValues)(percent);
    return (react_2.default.createElement("div", { className: "ChanceOfRain__wrapper" },
        react_2.default.createElement(material_1.Stack, Object.assign({}, props.stack),
            react_2.default.createElement(material_1.Slider, Object.assign({}, props.slider, { sx: { filter: "drop-shadow(0 0 1px black)" }, "aria-label": "Temperature", disabled: true })),
            react_2.default.createElement("div", { className: "ChanceOfRain__wrapper-span" },
                react_2.default.createElement("span", { style: { color: timeColor } }, time)))));
};
exports.default = RainTimeSlider;
