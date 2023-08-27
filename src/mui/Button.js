"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const Button = ({ variant, color, href, startIcon, endIcon, onClick, text }) => {
    const props = {
        variant: variant,
        color: color,
        href: href,
        onClick: onClick,
        startIcon: startIcon,
        endIcon: endIcon,
    };
    react_1.default.createElement(material_1.Button, Object.assign({}, props), text);
};
exports.default = Button;
// * 'text' for anchor like look
// * 'contained' for for normal button
// * 'outlined' for outlined button
