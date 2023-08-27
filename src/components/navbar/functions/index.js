"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDrawerToggleFunc = exports.drawerPropsFunc = exports.handleDrawer = void 0;
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const handleDrawer = ({ handleDrawerToggle, drawerWidth }) => {
    const navItems = ["Home", "About", "Contact"];
    return (react_1.default.createElement(material_1.Box, { onClick: handleDrawerToggle, sx: { textAlign: "start" } },
        react_1.default.createElement(material_1.Typography, { variant: "h6", sx: { my: 2, marginLeft: 1.5 } }, "Weather Map"),
        react_1.default.createElement(material_1.Divider, null),
        react_1.default.createElement(material_1.List, null, navItems.map((item) => (react_1.default.createElement(material_1.ListItem, { key: item, disablePadding: true },
            react_1.default.createElement(material_1.ListItemButton, null,
                react_1.default.createElement(material_1.ListItemText, { primary: item }))))))));
};
exports.handleDrawer = handleDrawer;
const drawerPropsFunc = (container, mobileOpen, handleDrawerToggle, drawerWidth) => {
    return {
        container: container,
        variant: "temporary",
        open: mobileOpen,
        onClose: handleDrawerToggle,
        ModalProps: true,
        sx: {
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            background: "#121212 !important",
        },
    };
};
exports.drawerPropsFunc = drawerPropsFunc;
const handleDrawerToggleFunc = (setMobileOpen) => {
    return () => {
        setMobileOpen((prevState) => !prevState);
    };
};
exports.handleDrawerToggleFunc = handleDrawerToggleFunc;
