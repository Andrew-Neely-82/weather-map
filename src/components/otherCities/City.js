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
const darkmode_1 = require("../../context/darkmode");
const react_1 = __importStar(require("react"));
const index_1 = require("./index");
const Para = ({ className, style, text }) => (react_1.default.createElement("p", { className: className, style: style }, text));
const City = ({ country, city, condition, icon, temp }) => {
    const darkModeContext = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    if (!darkModeContext) {
        // Handle the case where the context is not available
        return null;
    }
    const { darkMode } = darkModeContext;
    const bg = darkMode ? index_1.themeStyles.light.background : index_1.themeStyles.dark.background;
    return (react_1.default.createElement("div", { className: "city-wrapper", style: { background: bg } },
        react_1.default.createElement("div", { className: "city-container" },
            react_1.default.createElement(Para, { className: "country", text: country }),
            react_1.default.createElement(Para, { className: "city", text: city }),
            react_1.default.createElement(Para, { className: "condition", text: condition })),
        react_1.default.createElement("div", { className: "weather-condition-container" },
            react_1.default.createElement(Para, { className: "weather-condition", text: icon }),
            react_1.default.createElement(Para, { className: "temperature", text: `${temp}°F` }))));
};
exports.default = City;
