var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const Box = ({ className, display, children }) => {
    return (react_1.default.createElement(material_1.Box, { className: className, display: display }, children));
};
exports.default = Box;
