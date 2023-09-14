"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Days = ({ style, day, condition, temp }) => {
    return (react_1.default.createElement("div", { className: "Day__" },
        react_1.default.createElement("span", { style: style }, day),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("span", { style: style }, condition),
        react_1.default.createElement("span", { style: style },
            temp,
            "\u00B0F")));
};
exports.default = Days;
