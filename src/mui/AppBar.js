"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const AppBar = ({ component, children }) => {
    return react_1.default.createElement(material_1.AppBar, { component: component }, children);
};
exports.default = AppBar;
