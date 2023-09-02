"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialUrlFunc = exports.searchTheme = exports.themeDark = exports.themeLight = exports.iconPropsFunc = exports.toolbarPropsFunc = void 0;
const index_1 = require("../index");
const toolbarPropsFunc = (darkMode) => {
    const toolProps = (0, index_1.toolPropsFunc)(darkMode, exports.themeLight, exports.themeDark);
    const toolbarProps = Object.assign(Object.assign({}, index_1.muiProps.toolbar), toolProps);
    return toolbarProps;
};
exports.toolbarPropsFunc = toolbarPropsFunc;
const iconPropsFunc = (props) => {
    const iconFunc = (0, index_1.buttonPropsFunc)(props);
    const iconProps = Object.assign(Object.assign({}, index_1.muiProps.iconButton), iconFunc);
    return iconProps;
};
exports.iconPropsFunc = iconPropsFunc;
// * themes
exports.themeLight = { background: "#efefef", color: "black", boxShadow: "none" };
exports.themeDark = { background: "#121212", color: "white", boxShadow: "none" };
exports.searchTheme = { background: "#353535", color: "white !important", borderRadius: "10rem" };
// * mapbox geocode api
const accessToken = process.env.REACT_APP_MAP_KEY;
const initialUrlFunc = (address) => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&access_token=${accessToken}`;
};
exports.initialUrlFunc = initialUrlFunc;
