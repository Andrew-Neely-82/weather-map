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
const export_1 = require("../../assets/svg/export");
const darkmode_1 = require("../../../../context/darkmode");
const react_1 = __importStar(require("react"));
const Days_1 = __importDefault(require("./days/Days"));
const SevenDay = () => {
    const darkModeContext = (0, react_1.useContext)(darkmode_1.DarkModeContext);
    if (!darkModeContext)
        return null;
    const { darkMode } = darkModeContext;
    const titleStyle = {
        color: darkMode ? "#000" : "#fff",
    };
    // const [days, setDays] = useState(Array(6).fill(null));
    return (react_1.default.createElement("div", { className: "SevenDay__" },
        react_1.default.createElement(Days_1.default, { style: titleStyle, day: "Tue", condition: "Isolate storms", temp: 10 }),
        react_1.default.createElement(Days_1.default, { style: titleStyle, day: "Wed", condition: react_1.default.createElement(export_1.LightRain, null), temp: 10 }),
        react_1.default.createElement(Days_1.default, { style: titleStyle, day: "Thu", condition: react_1.default.createElement(export_1.PartlyCloudy, null), temp: 10 }),
        react_1.default.createElement(Days_1.default, { style: titleStyle, day: "Fri", condition: react_1.default.createElement(export_1.PartlyCloudy, null), temp: 10 }),
        react_1.default.createElement(Days_1.default, { style: titleStyle, day: "Sat", condition: react_1.default.createElement(export_1.Lightning, null), temp: 10 }),
        react_1.default.createElement(Days_1.default, { style: titleStyle, day: "Sun", condition: react_1.default.createElement(export_1.Rain, null), temp: 10 })));
};
exports.default = SevenDay;
