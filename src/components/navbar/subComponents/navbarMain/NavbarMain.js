"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = require("../../../../mui/export");
const index_1 = require("./index");
const darkmode_1 = require("../../../../context/darkmode");
const import_1 = require("../import");
const react_1 = require("react");
const index_2 = require("../index");
const IconButtonGroup_1 = __importDefault(require("./IconButtonGroup"));
const react_2 = __importDefault(require("react"));
require("./style.scss");
const NavbarMain = (props) => {
    const [address, setAddress] = (0, react_1.useState)(props.location);
    const navItems = ["Home", "About", "Contact"];
    // * Dark Mode Handling
    const darkModeContext = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode, toggleDarkMode } = darkModeContext;
    // * Props
    const switchProps = (0, index_2.switchPropsFunc)(darkMode, toggleDarkMode);
    const toolbarProps = (0, index_1.toolbarPropsFunc)(darkMode);
    const iconProps = (0, index_1.iconPropsFunc)(props);
    // * mapbox geo api
    const initialUrl = (0, index_1.initialUrlFunc)(address);
    const getAddress = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(initialUrl);
            const data = yield response.json();
            if (data.features && data.features.length > 0) {
                const placeName = data.features[0].place_name;
                setAddress(placeName);
            }
        }
        catch (error) {
            console.error("Error fetching address:", error);
        }
    });
    getAddress();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, react_1.useEffect)(() => {
        setAddress(props.location);
    }, [props.location]);
    return (react_2.default.createElement(export_1.AppBar, { component: "nav" },
        react_2.default.createElement(export_1.Toolbar, Object.assign({}, toolbarProps),
            react_2.default.createElement(IconButtonGroup_1.default, { iconProps: iconProps }),
            react_2.default.createElement(export_1.Typography, Object.assign({}, index_2.muiProps.typography, { text: address, component: "div", variant: "body1" })),
            react_2.default.createElement(export_1.Button, { variant: "text", color: "inherit", text: "Get Weather" }),
            react_2.default.createElement(export_1.Box, Object.assign({}, index_2.muiProps.box, { className: "buttons" }), navItems.map((item) => (react_2.default.createElement(export_1.Button, { key: item, sx: { color: "#fff" }, text: item, variant: "text", color: "inherit" })))),
            react_2.default.createElement(import_1.SearchAndToggle, { address: address, setAddress: () => {
                    throw new Error("Function not implemented.");
                }, props: undefined }),
            react_2.default.createElement(import_1.DarkModeSwitch, Object.assign({}, switchProps)))));
};
exports.default = NavbarMain;
