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
const Search_1 = require("../../functions/Search");
const Search_2 = __importDefault(require("@mui/icons-material/Search"));
const react_1 = __importStar(require("react"));
const index_1 = require("../index");
const navbarMain_1 = require("../navbarMain");
const SearchAndToggle = (props) => {
    const [search, setSearch] = (0, react_1.useState)("Search City...");
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const propList = (0, index_1.searchToggleProps)(props);
    (0, react_1.useEffect)(() => {
        // Update the search state when the address prop changes
        setSearch(props.address);
    }, [props.address]);
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            const inputElement = event.target;
            setInputValue(inputElement.value);
            props.setAddress(inputElement.value);
        }
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleClearClick = () => {
        setInputValue("");
        const searchElement = document.getElementById("search");
        if (searchElement) {
            searchElement.value = "";
        }
    };
    const styledInputBaseProps = Object.assign(Object.assign({ sx: navbarMain_1.searchTheme, id: "search", onChange: handleInputChange, onKeyDown: handleKeyDown, inputProps: { "aria-label": "search" } }, propList.input), { placeholder: search });
    return (react_1.default.createElement("div", Object.assign({}, propList.container),
        react_1.default.createElement(Search_1.Search, Object.assign({}, propList.search),
            react_1.default.createElement(Search_1.SearchIconWrapper, null,
                react_1.default.createElement(Search_2.default, null)),
            react_1.default.createElement(Search_1.StyledInputBase, Object.assign({}, styledInputBaseProps))),
        inputValue && (react_1.default.createElement("button", { className: "clear", onClick: handleClearClick }, "X"))));
};
exports.default = SearchAndToggle;
