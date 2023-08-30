var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const IconButton = ({ color, edge, sx, onClick, children }) => {
    const props = {
        color: color,
        edge: edge,
        sx: sx,
        onClick: onClick,
    };
    return react_1.default.createElement(material_1.IconButton, Object.assign({}, props), children);
};
exports.default = IconButton;
