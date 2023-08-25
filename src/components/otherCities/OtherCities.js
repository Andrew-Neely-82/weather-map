"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = __importDefault(require("./City"));
const react_1 = __importDefault(require("react"));
require("./style.scss");
const cityProps = [
    {
        country: "USA",
        city: "New York",
        condition: "Cloudy",
        icon: "☁️",
        temp: 72,
    },
    {
        country: "Canada",
        city: "Toronto",
        condition: "Rainy",
        icon: "🌧️",
        temp: 60,
    },
    {
        country: "Mexico",
        city: "Mexico City",
        condition: "Sunny",
        icon: "☀️",
        temp: 60,
    },
];
const OtherCities = () => {
    return (react_1.default.createElement("div", { className: "OtherCities__" },
        react_1.default.createElement("h3", null, "Other Cities"),
        cityProps.map((cityProps, index) => (react_1.default.createElement(react_1.default.Fragment, { key: index },
            react_1.default.createElement(City_1.default, Object.assign({}, cityProps)),
            react_1.default.createElement("br", null))))));
};
exports.default = OtherCities;
