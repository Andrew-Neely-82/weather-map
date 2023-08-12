export const muiProps = {
  toolbar: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
    },
  },

  iconButton: {
    color: "inherit",
    edge: "start",
    sx: {
      mr: 5,
      display: {
        xl: "none",
        lg: "none",
        md: "none",
        sm: "none",
        xs: "block",
      },
    },
    className: "pop-out",
  },

  typography: {
    variant: "h6",
    component: "div",
    sx: {
      display: {
        xs: "none",
        sm: "block",
      },
    },
    className: "brand",
  },

  box: {
    display: {
      xl: "none",
      lg: "none",
      md: "none",
      sm: "none",
      xs: "none",
    },
  },
};
