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

export function toolPropsFunc(darkMode: boolean, themeLight: object, themeDark: object) {
  return {
    style: darkMode ? themeLight : themeDark,
  };
}

export const buttonPropsFunc = (props: { handleDrawerToggle: () => void }) => {
  return {
    onClick: props.handleDrawerToggle,
  };
};

interface SearchToggleProps {
  container: {
    className: string;
    style: object;
  };
  search: {
    style: object;
    sx: {
      color: string;
      borderRadius: string;
    };
  };
  input: {
    style: object;
  };
}

export const searchToggleProps = (props: any): SearchToggleProps => {
  return {
    container: {
      className: "search-container",
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
      style: {
        width: "20rem",
      },
    },
  };
};

export const switchPropsFunc = (darkMode: boolean, toggleDarkMode: () => void) => {
  return {
    checked: !darkMode,
    onChange: toggleDarkMode,
  };
};
