"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const react_1 = __importDefault(require("react"));
require("./style.scss");
const Day = () => {
    return (react_1.default.createElement("svg", Object.assign({}, index_1.svg),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("filter", { id: "blur", width: "200%", height: "200%" },
                react_1.default.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "3" }),
                react_1.default.createElement("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                react_1.default.createElement("feComponentTransfer", null,
                    react_1.default.createElement("feFuncA", { type: "linear", slope: "0.05" })),
                react_1.default.createElement("feMerge", null,
                    react_1.default.createElement("feMergeNode", null),
                    react_1.default.createElement("feMergeNode", { in: "SourceGraphic" })))),
        react_1.default.createElement("g", { filter: "url(#blur)", id: "day" },
            react_1.default.createElement("g", { transform: "translate(32,32)" },
                react_1.default.createElement("g", { className: "am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out" },
                    react_1.default.createElement("g", null,
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" }))),
                    react_1.default.createElement("g", { transform: "rotate(45)" },
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" }))),
                    react_1.default.createElement("g", { transform: "rotate(90)" },
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" }))),
                    react_1.default.createElement("g", { transform: "rotate(135)" },
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" }))),
                    react_1.default.createElement("g", { transform: "rotate(180)" },
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" }))),
                    react_1.default.createElement("g", { transform: "rotate(225)" },
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" }))),
                    react_1.default.createElement("g", { transform: "rotate(270)" },
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" }))),
                    react_1.default.createElement("g", { transform: "rotate(315)" },
                        react_1.default.createElement("line", Object.assign({}, index_1.line, { "stroke-linecap": "round", "stroke-width": "2" })))),
                react_1.default.createElement("circle", { cx: "0", cy: "0", fill: "orange", r: "5", "stroke-width": "2" })))));
};
exports.default = Day;
