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

export function toolPropsFunc(darkMode, themeLight, themeDark) {
  return {
    style: darkMode ? themeLight : themeDark,
  };
}

export const buttonPropsFunc = (props) => {
  return {
    onClick: props.handleDrawerToggle,
  };
};

export const searchToggleProps = (props) => {
  return {
    container: {
      className: "toggle/search",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    search: {
      style: props.searchTheme,
      sx: {
        color: "white",
        borderRadius: "10rem",
      },
    },
    input: {
      placeholder: "Search City...",
      style: {
        width: "20rem",
      },
    },
  };
};

export const switchPropsFunc = (darkMode, toggleDarkMode) => {
  return {
    checked: !darkMode,
    onChange: toggleDarkMode,
  };
};

