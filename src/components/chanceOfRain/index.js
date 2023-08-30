Object.defineProperty(exports, "__esModule", { value: true });
exports.propValues = void 0;
const propValues = (percent) => {
    return {
        stack: {
            sx: {
                alignContent: "center",
                alignItems: "center",
                height: 300,
            },
            spacing: 1,
            direction: "column",
        },
        slider: {
            orientation: "vertical",
            defaultValue: percent,
        },
    };
};
exports.propValues = propValues;
