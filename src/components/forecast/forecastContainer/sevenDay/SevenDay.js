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
const react_1 = __importStar(require("react"));
const Days_1 = __importDefault(require("./days/Days"));
const SevenDay = () => {
    const [days, setDays] = (0, react_1.useState)(Array(6).fill(null));
    return (react_1.default.createElement("div", { className: "SevenDay__" },
        react_1.default.createElement(Days_1.default, { day: "Tue", condition: "Isolate storms", temp: 10 }),
        react_1.default.createElement(Days_1.default, { day: "Wed", condition: "light rain", temp: 10 }),
        react_1.default.createElement(Days_1.default, { day: "Thu", condition: "partly cloudy", temp: 10 }),
        react_1.default.createElement(Days_1.default, { day: "Fri", condition: "partly cloudy", temp: 10 }),
        react_1.default.createElement(Days_1.default, { day: "Sat", condition: "thunder storms", temp: 10 }),
        react_1.default.createElement(Days_1.default, { day: "Sun", condition: "rain", temp: 10 })));
};
exports.default = SevenDay;
// * uncomment when weather is figured out
