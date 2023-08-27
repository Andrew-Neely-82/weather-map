"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInputBase = exports.SearchIconWrapper = exports.Search = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.Search = (0, styles_1.styled)("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0, styles_1.alpha)(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: (0, styles_1.alpha)(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));
exports.SearchIconWrapper = (0, styles_1.styled)("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
exports.StyledInputBase = (0, styles_1.styled)(material_1.InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));
