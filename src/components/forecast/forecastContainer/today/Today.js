"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const darkmode_1 = require("../../../../context/darkmode");
const react_1 = __importStar(require("react"));
const Today = ({ today, time, temp, feels, wind, pressure, humidity, sunrise, sunset }) => {
    const darkModeContext = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode } = darkModeContext;
    const titleStyle = {
        color: darkMode ? "#fff" : "#000",
    };
    return (react_1.default.createElement("div", { className: "today__" },
        react_1.default.createElement("span", { className: "today__day", style: titleStyle }, today),
        react_1.default.createElement("span", { className: "today__day" }, time),
        react_1.default.createElement("div", { className: "today__day__weather-wrapper" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null,
                    temp,
                    "*F")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null,
                    "Feels Like ",
                    feels,
                    "*F")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null,
                    "Wind ",
                    wind)),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null,
                    "Pressure ",
                    pressure)),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null,
                    "Humidity ",
                    humidity))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                "Sunrise: ",
                sunrise),
            react_1.default.createElement("div", null,
                "Sunset: ",
                sunset))));
};
exports.default = Today;
