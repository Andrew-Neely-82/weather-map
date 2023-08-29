"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./functions/index");
const NavbarMain_1 = __importDefault(require("./subComponents/navbarMain/NavbarMain"));
const darkmode_1 = require("../../context/darkmode");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const themes_1 = require("./functions/themes");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
require("./style.scss");
const react_2 = __importDefault(require("react"));
const Navbar = (props) => {
    const [mobileOpen, setMobileOpen] = (0, react_1.useState)(false);
    const darkModeContext = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode } = darkModeContext;
    const { window } = props;
    const handleDrawerToggle = (0, index_1.handleDrawerToggleFunc)(setMobileOpen);
    const drawer = (0, index_1.handleDrawer)(handleDrawerToggle);
    const drawerWidth = 240;
    const container = window !== undefined ? window().document.body : null;
    const drawerProps = (0, index_1.drawerPropsFunc)(container, mobileOpen, handleDrawerToggle, drawerWidth);
    return (react_2.default.createElement("div", { className: "Navbar__" },
        react_2.default.createElement(styles_1.ThemeProvider, { theme: darkMode ? themes_1.lightTheme : themes_1.darkTheme },
            react_2.default.createElement(material_1.Box, { sx: { display: "flex" } },
                react_2.default.createElement(material_1.CssBaseline, null),
                react_2.default.createElement(NavbarMain_1.default, { handleDrawerToggle: handleDrawerToggle }),
                react_2.default.createElement(material_1.Box, { component: "nav" },
                    react_2.default.createElement(material_1.Drawer, Object.assign({}, drawerProps), drawer))))));
};
Navbar.propTypes = {
    window: prop_types_1.default.func,
};
exports.default = Navbar;
