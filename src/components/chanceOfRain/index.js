export const propValues = (percent) => {
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
