interface PropValues {
  stack: {
    sx: {
      alignContent: string;
      alignItems: string;
      height: number;
    };
    spacing: number;
    direction: "row" | "row-reverse" | "column" | "column-reverse";
  };
  slider: {
    orientation: "vertical" | "horizontal" | undefined;
    defaultValue: number;
  };
}

export const propValues = (percent: number): PropValues => {
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
