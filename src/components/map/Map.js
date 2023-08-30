"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const react_map_gl_1 = __importStar(require("react-map-gl"));
const NavbarMain_1 = __importDefault(require("../navbar/subComponents/navbarMain/NavbarMain"));
const darkmode_1 = require("../../context/darkmode");
const react_1 = require("react");
require("mapbox-gl/dist/mapbox-gl.css");
require("./style.scss");
const react_2 = __importDefault(require("react"));
const Map = () => {
    const initialViewState = { longitude: -97.7431, latitude: 30.2672, zoom: 6 };
    const [viewState, setViewState] = (0, react_1.useState)(initialViewState);
    const [markerVisible, setMarkerVisible] = (0, react_1.useState)(false);
    const [location, setLocation] = (0, react_1.useState)("Austin, TX");
    // * Dark Mode Context
    const darkModeContext = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode } = darkModeContext;
    // * Marker Visibility and handling
    const onMarkerDragEnd = (0, index_1.onMarkerDragEndFunc)(setViewState, viewState, setLocation);
    const handleAddMarker = () => setMarkerVisible(!markerVisible);
    const makerVisibility = (0, index_1.makerVisibilityFunc)(markerVisible);
    // * Geolocation handling
    const onGeolocate = (0, index_1.onGeolocateFunc)(setViewState, viewState, setLocation);
    // * Props
    const mapStyle = (0, index_1.mapStyling)(darkMode);
    const reactMapGLProps = (0, index_1.reactMapGLPropsFunc)(setViewState, index_1.accessToken, mapStyle);
    const markerProps = (0, index_1.markerPropsFunc)(viewState, onMarkerDragEnd);
    return (react_2.default.createElement("div", { className: "Map__" },
        react_2.default.createElement("div", { className: "Map__container" },
            react_2.default.createElement("h3", null, "Global Map"),
            react_2.default.createElement(react_map_gl_1.default, Object.assign({}, reactMapGLProps, viewState),
                markerVisible && react_2.default.createElement(react_map_gl_1.Marker, Object.assign({}, markerProps)),
                react_2.default.createElement(react_map_gl_1.NavigationControl, null),
                react_2.default.createElement(react_map_gl_1.GeolocateControl, { onGeolocate: onGeolocate }),
                react_2.default.createElement("button", { className: "marker-toggle", onClick: handleAddMarker }, makerVisibility)),
            react_2.default.createElement(NavbarMain_1.default, { location: location }))));
};
exports.default = Map;
