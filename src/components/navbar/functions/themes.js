"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = exports.darkTheme = void 0;
const material_1 = require("@mui/material");
exports.darkTheme = (0, material_1.createTheme)({
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2",
        },
    },
});
exports.lightTheme = (0, material_1.createTheme)({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
    },
});
