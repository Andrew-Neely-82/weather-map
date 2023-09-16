"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Lightning = ({ style }) => {
    const svgStyles = Object.assign({ width: "100%", height: "100%", transform: "translate(0px, 0px, 0px)" }, style);
    const innerStyles = { display: "block" };
    const rect = { width: "50", height: "50", x: "0", y: "0", fill: "#fff", opacity: "0" };
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "50", height: "50", preserveAspectRatio: "xMidYMid meet", style: svgStyles },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "__lottie_element_62" },
                react_1.default.createElement("rect", Object.assign({}, rect))),
            react_1.default.createElement("filter", { id: "__lottie_element_64", filterUnits: "objectBoundingBox", x: "0%", y: "0%", width: "100%", height: "100%" },
                react_1.default.createElement("feComponentTransfer", { in: "SourceGraphic" },
                    react_1.default.createElement("feFuncA", { type: "table", tableValues: "1.0 0.0" }))),
            react_1.default.createElement("mask", { id: "__lottie_element_63", "mask-type": "alpha" },
                react_1.default.createElement("g", { filter: "url(#__lottie_element_64)" },
                    react_1.default.createElement("rect", Object.assign({}, rect)),
                    react_1.default.createElement("g", { style: innerStyles, transform: "matrix(0.9928568601608276,-0.11931181699037552,0.11931181699037552,0.9928568601608276,-2.794149398803711,3.4720332622528076)", opacity: "0.7425103999733983" },
                        react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,24.5,32)" },
                            react_1.default.createElement("path", { fill: "rgb(0,0,255)", "fill-opacity": "1", d: " M-3.5,-5 C-3.5,-5 1.5,-5 1.5,-5 C1.5,-5 -9.600000381469727,5 -9.600000381469727,5 C-9.600000381469727,5 -4.5,-3 -4.5,-3 C-4.5,-3 -8.5,-3 -8.5,-3 C-8.5,-3 -1.5,-12 -1.5,-12 C-1.5,-12 3.5,-12 3.5,-12 C3.5,-12 -3.5,-5 -3.5,-5z" }))))),
            react_1.default.createElement("filter", { id: "__lottie_element_71", filterUnits: "objectBoundingBox", x: "0%", y: "0%", width: "100%", height: "100%" },
                react_1.default.createElement("feComponentTransfer", { in: "SourceGraphic" },
                    react_1.default.createElement("feFuncA", { type: "table", tableValues: "1.0 0.0" }))),
            react_1.default.createElement("mask", { id: "__lottie_element_70", "mask-type": "alpha" },
                react_1.default.createElement("g", { filter: "url(#__lottie_element_71)" },
                    react_1.default.createElement("rect", { width: "50", height: "50", x: "0", y: "0", fill: "#fff", opacity: "0" }),
                    react_1.default.createElement("g", { style: innerStyles, transform: "matrix(0.9851614236831665,-0.17163020372390747,0.17163020372390747,0.9851614236831665,-3.8232789039611816,4.816933631896973)", opacity: "0.276652800035469" },
                        react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,24.5,32)" },
                            react_1.default.createElement("path", { fill: "yellow", "fill-opacity": "0.5", d: " M2.5999999046325684,2 C2.5999999046325684,2 7.599999904632568,2 7.599999904632568,2 C7.599999904632568,2 -3.5,12 -3.5,12 C-3.5,12 1.600000023841858,4 1.600000023841858,4 C1.600000023841858,4 -2.5,4 -2.5,4 C-2.5,4 4.5,-5 4.5,-5 C4.5,-5 9.600000381469727,-5 9.600000381469727,-5 C9.600000381469727,-5 2.5999999046325684,2 2.5999999046325684,2z" }))))),
            react_1.default.createElement("filter", { id: "__lottie_element_78", filterUnits: "objectBoundingBox", x: "0%", y: "0%", width: "100%", height: "100%" },
                react_1.default.createElement("feComponentTransfer", { in: "SourceGraphic" },
                    react_1.default.createElement("feFuncA", { type: "table", tableValues: "1.0 0.0" }))),
            react_1.default.createElement("mask", { id: "__lottie_element_77", "mask-type": "alpha" },
                react_1.default.createElement("g", { filter: "url(#__lottie_element_78)" },
                    react_1.default.createElement("rect", Object.assign({}, rect)),
                    react_1.default.createElement("g", { transform: "matrix(1,0,0,1,0,0)", opacity: "1", style: innerStyles },
                        react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,25,17.5)" },
                            react_1.default.createElement("path", { fill: "yellow", "fill-opacity": "0", d: " M-12,13.5 C-12,13.5 -13,13.5 -13,13.5 C-17.5,13.5 -21,10 -21,5.5 C-21,1 -17.5,-2.5 -13,-2.5 C-13,-2.5 -13,-3 -13,-3 C-13,-8.800000190734863 -8.300000190734863,-13.5 -2.5,-13.5 C2.299999952316284,-13.5 6.400000095367432,-10.399999618530273 7.599999904632568,-5.900000095367432 C8.699999809265137,-6.300000190734863 9.899999618530273,-6.5 11,-6.5 C16.5,-6.5 21,-2 21,3.5 C21,9 16.5,13.5 11,13.5 C11,13.5 10,13.5 10,13.5" }))))),
            react_1.default.createElement("filter", { id: "__lottie_element_85", filterUnits: "objectBoundingBox", x: "0%", y: "0%", width: "100%", height: "100%" },
                react_1.default.createElement("feComponentTransfer", { in: "SourceGraphic" },
                    react_1.default.createElement("feFuncA", { type: "table", tableValues: "1.0 0.0" }))),
            react_1.default.createElement("mask", { id: "__lottie_element_84", "mask-type": "alpha" },
                react_1.default.createElement("g", { filter: "url(#__lottie_element_85)" },
                    react_1.default.createElement("rect", Object.assign({}, rect)),
                    react_1.default.createElement("g", { transform: "matrix(1,0,0,1,0,0)", opacity: "0.5", style: innerStyles },
                        react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,25,17.5)" },
                            react_1.default.createElement("path", { fill: "yellow", "fill-opacity": "1", d: " M-12,13.5 C-12,13.5 -13,13.5 -13,13.5 C-17.5,13.5 -21,10 -21,5.5 C-21,1 -17.5,-2.5 -13,-2.5 C-13,-2.5 -13,-3 -13,-3 C-13,-8.800000190734863 -8.300000190734863,-13.5 -2.5,-13.5 C2.299999952316284,-13.5 6.400000095367432,-10.399999618530273 7.599999904632568,-5.900000095367432 C8.699999809265137,-6.300000190734863 9.899999618530273,-6.5 11,-6.5 C16.5,-6.5 21,-2 21,3.5 C21,9 16.5,13.5 11,13.5 C11,13.5 10,13.5 10,13.5" })))))),
        react_1.default.createElement("g", { "clip-path": "url(#__lottie_element_62)" },
            react_1.default.createElement("g", { mask: "url(#__lottie_element_84)", style: innerStyles },
                react_1.default.createElement("g", { transform: "matrix(0.9928568601608276,-0.11931181699037552,0.11931181699037552,0.9928568601608276,-2.794149398803711,3.4720332622528076)", opacity: "1" },
                    react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,24.5,32)" },
                        react_1.default.createElement("path", { fill: "yellow", "fill-opacity": "1", d: " M-3.5,-5 C-3.5,-5 1.5,-5 1.5,-5 C1.5,-5 -9.600000381469727,5 -9.600000381469727,5 C-9.600000381469727,5 -4.5,-3 -4.5,-3 C-4.5,-3 -8.5,-3 -8.5,-3 C-8.5,-3 -1.5,-12 -1.5,-12 C-1.5,-12 3.5,-12 3.5,-12 C3.5,-12 -3.5,-5 -3.5,-5z" })))),
            react_1.default.createElement("g", { mask: "url(#__lottie_element_77)", style: innerStyles },
                react_1.default.createElement("g", { transform: "matrix(0.9851614236831665,-0.17163020372390747,0.17163020372390747,0.9851614236831665,-3.8232789039611816,4.816933631896973)", opacity: "1" },
                    react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,24.5,32)" },
                        react_1.default.createElement("path", { fill: "yellow", "fill-opacity": "1", d: " M2.5999999046325684,2 C2.5999999046325684,2 7.599999904632568,2 7.599999904632568,2 C7.599999904632568,2 -3.5,12 -3.5,12 C-3.5,12 1.600000023841858,4 1.600000023841858,4 C1.600000023841858,4 -2.5,4 -2.5,4 C-2.5,4 4.5,-5 4.5,-5 C4.5,-5 9.600000381469727,-5 9.600000381469727,-5 C9.600000381469727,-5 2.5999999046325684,2 2.5999999046325684,2z" })))),
            react_1.default.createElement("g", { mask: "url(#__lottie_element_70)", style: innerStyles },
                react_1.default.createElement("g", { transform: "matrix(1,0,0,1,0,0)", opacity: "1" },
                    react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,25,17.5)" },
                        react_1.default.createElement("path", { fill: "gray", "fill-opacity": "1", d: " M6.90500020980835,-6.039000034332275 C7.892000198364258,-6.348999977111816 10.031999588012695,-6.5 11,-6.5 C16.5,-6.5 21,-2 21,3.5 C21,9 16.5,13.5 11,13.5 C11,13.5 -1.156000018119812,13.496000289916992 -1.156000018119812,13.496000289916992 C-1.156000018119812,13.496000289916992 1.0099999904632568,9.503999710083008 1.0099999904632568,9.503999710083008 C1.0099999904632568,9.503999710083008 -1.274999976158142,9.501999855041504 -1.274999976158142,9.501999855041504 C-1.274999976158142,9.501999855041504 3.4730000495910645,2.6540000438690186 3.4730000495910645,2.6540000438690186 C3.4730000495910645,2.6540000438690186 6.609000205993652,-5.875 6.609000205993652,-5.875" })))),
            react_1.default.createElement("g", { mask: "url(#__lottie_element_63)", style: innerStyles },
                react_1.default.createElement("g", { transform: "matrix(1,0,0,1,0,0)", opacity: "1" },
                    react_1.default.createElement("g", { opacity: "1", transform: "matrix(1,0,0,1,25,17.5)" },
                        react_1.default.createElement("path", { fill: "gray", "fill-opacity": "1", d: " M0,13.5 C0,13.5 -13,13.5 -13,13.5 C-17.5,13.5 -21,10 -21,5.5 C-21,1 -17.5,-2.5 -13,-2.5 C-13,-2.5 -13,-3 -13,-3 C-13,-8.800000190734863 -8.300000190734863,-13.5 -2.5,-13.5 C-1.9800000190734863,-13.5 -1.4670000076293945,-13.46399974822998 -0.9660000205039978,-13.392999649047852 C3.1549999713897705,-12.812000274658203 6.53000020980835,-9.911999702453613 7.599999904632568,-5.900000095367432" })))))));
};
exports.default = Lightning;
