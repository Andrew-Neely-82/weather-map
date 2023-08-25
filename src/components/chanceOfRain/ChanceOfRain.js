"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const darkmode_1 = require("../../context/darkmode");
const material_1 = require("@mui/material");
const RainTime_1 = __importDefault(require("./RainTime"));
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
require("./style.scss");
const ChanceOfRain = () => {
    const rainTypes = ["Heavy", "Rainy", "Sunny"];
    const { darkMode } = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    const color = darkMode ? "#000" : "#919191";
    return (react_2.default.createElement("div", { className: "ChanceOfRain__" },
        react_2.default.createElement("h3", null, "Chance of Rain"),
        react_2.default.createElement(material_1.Stack, { direction: "column" },
            react_2.default.createElement(material_1.Box, { className: "Box", sx: { display: "flex", justifyContent: "space-between", width: 200 } },
                react_2.default.createElement(RainTime_1.default, { time: "10am", percent: "5" }),
                react_2.default.createElement(RainTime_1.default, { time: "11am", percent: "10" }),
                react_2.default.createElement(RainTime_1.default, { time: "1pm", percent: "16" }),
                react_2.default.createElement(RainTime_1.default, { time: "2pm", percent: "36" }),
                react_2.default.createElement(RainTime_1.default, { time: "3pm", percent: "64" }),
                react_2.default.createElement(RainTime_1.default, { time: "4pm", percent: "82", sx: { background: "red" } }),
                react_2.default.createElement("div", { className: "background" }, rainTypes.map((rainType, key) => (react_2.default.createElement("div", { className: "rainType", key: key },
                    react_2.default.createElement("p", { style: { color } }, rainType),
                    react_2.default.createElement("div", { className: "line" },
                        react_2.default.createElement("hr", { style: { color } }))))))))));
};
exports.default = ChanceOfRain;
