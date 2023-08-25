"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const import_1 = require("./import");
const react_1 = require("react");
const Switch_1 = __importDefault(require("./switch/Switch"));
const ForecastOptions_1 = __importDefault(require("./forecastOptions/ForecastOptions"));
const react_2 = __importDefault(require("react"));
const ForecastContainer = () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    return (react_2.default.createElement("div", { className: "ForecastContainer__" },
        react_2.default.createElement("div", { className: "ForecastContainer__buttons-container" },
            react_2.default.createElement(ForecastOptions_1.default, null),
            react_2.default.createElement(Switch_1.default, null)),
        react_2.default.createElement("div", { className: "ForecastContainer__container" }),
        react_2.default.createElement(import_1.Today, null),
        react_2.default.createElement(import_1.Tomorrow, null),
        react_2.default.createElement(import_1.SevenDay, null)));
};
exports.default = ForecastContainer;
