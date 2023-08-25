interface PropValues {
  stack: {
    sx: {
      alignContent: any;
      alignItems: any;
      height: any;
    };
    spacing: any;
    direction: "row" | "row-reverse" | "column" | "column-reverse";
  };
  slider: {
    orientation: "vertical" | "horizontal" | undefined;
    defaultValue: any;
  };
}

export const propValues = (percent: any): PropValues => {
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
