Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Switch = (0, styles_1.styled)(material_1.Switch)(({ theme }) => ({
    width: 200,
    height: 40,
    padding: 0,
    borderRadius: 1000,
    "& .MuiSwitch-switchBase": {
        margin: 0,
        padding: 0,
        transform: "translateX(0px)",
        "&.Mui-checked": {
            color: "#000",
            transform: "translateX(100px)",
            // * button right side
            "& .MuiSwitch-thumb:before": {
                content: "'Air Quality'",
                position: "absolute",
                top: 8,
                left: 12,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#1e1e1e",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: "lightblue",
        width: 100,
        height: 40,
        borderRadius: 1000,
        "&:before": {
            content: "'Forecast'",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 18,
            top: 8,
            color: "black",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1e1e1e",
        borderRadius: 20 / 2,
        "&:before": {
            content: "'Forecast'",
            position: "absolute",
            top: 8,
            left: 18,
            color: "#767676",
        },
        "&:after": {
            content: "'Air Quality'",
            position: "absolute",
            top: 8,
            right: 12,
            color: "#767676",
        },
    },
}));
exports.default = Switch;
