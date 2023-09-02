"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchPropsFunc = exports.searchToggleProps = exports.buttonPropsFunc = exports.toolPropsFunc = exports.muiProps = void 0;
exports.muiProps = {
    toolbar: { sx: { display: "flex", justifyContent: "space-between" } },
    iconButton: {
        color: "inherit",
        edge: "start",
        sx: {
            mr: 5,
            display: { xl: "none", lg: "none", md: "none", sm: "none", xs: "block" },
        },
        className: "pop-out",
    },
    typography: {
        variant: "h6",
        component: "div",
        sx: { display: { xs: "none", sm: "block" } },
        className: "brand",
    },
    box: { display: { xl: "none", lg: "none", md: "none", sm: "none", xs: "none" } },
};
function toolPropsFunc(darkMode, themeLight, themeDark) {
    return { style: darkMode ? themeLight : themeDark };
}
exports.toolPropsFunc = toolPropsFunc;
const buttonPropsFunc = (props) => {
    return { onClick: props.handleDrawerToggle };
};
exports.buttonPropsFunc = buttonPropsFunc;
const searchToggleProps = (props) => {
    return {
        container: {
            className: "search-container",
            style: { display: "flex", justifyContent: "center", alignItems: "center" },
        },
        search: {
            style: props.searchTheme,
            sx: { color: "white" },
        },
        input: {
            style: { width: "20rem" },
        },
    };
};
exports.searchToggleProps = searchToggleProps;
const switchPropsFunc = (darkMode, toggleDarkMode) => {
    return { checked: !darkMode, onChange: toggleDarkMode };
};
exports.switchPropsFunc = switchPropsFunc;
