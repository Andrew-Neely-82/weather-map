"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
// interface ButtonProps {
//   variant?: string;
//   color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
//   href?: string;
//   startIcon?: React.ReactNode;
//   endIcon?: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   text?: string;
//   sx?: object;
// }
const Button = ({ variant, color, href, startIcon, endIcon, onClick, text, sx }) => {
    const props = {
        variant: variant,
        color: color,
        href: href,
        onClick: onClick,
        startIcon: startIcon,
        endIcon: endIcon,
        sx: sx,
    };
    react_1.default.createElement(material_1.Button, Object.assign({}, props), text);
};
exports.default = Button;
// * 'text' for anchor like look
// * 'contained' for for normal button
// * 'outlined' for outlined button
