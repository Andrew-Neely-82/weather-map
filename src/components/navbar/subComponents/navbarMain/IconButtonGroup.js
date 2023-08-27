"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const IconButtonGroup = (props) => {
    return (react_1.default.createElement(material_1.IconButton, Object.assign({}, props.iconProps, { "aria-label": "open drawer" }),
        react_1.default.createElement(Menu_1.default, null)));
};
exports.default = IconButtonGroup;
