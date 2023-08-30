var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ForecastContainer_1 = __importDefault(require("./forecastContainer/ForecastContainer"));
const react_1 = __importDefault(require("react"));
require("./style.scss");
const Forecast = () => {
    return (react_1.default.createElement("div", { className: "Forecast__" },
        react_1.default.createElement(ForecastContainer_1.default, null)));
};
exports.default = Forecast;
