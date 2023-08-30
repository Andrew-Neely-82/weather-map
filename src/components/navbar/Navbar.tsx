import { drawerPropsFunc, handleDrawer, handleDrawerToggleFunc } from "./functions/index";
import NavbarMain from "./subComponents/navbarMain/NavbarMain";
import { DarkModeContext } from "../../context/darkmode";
import { Box, CssBaseline, Drawer } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./functions/themes";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

const Navbar: React.FC = (props: any) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;

  const { window } = props;

  const handleDrawerToggle = handleDrawerToggleFunc(setMobileOpen);

  const drawerWidth = 240;
  
  const drawer = handleDrawer({
    handleDrawerToggle,
    drawerWidth,
    mobileOpen: undefined,
    setMobileOpen: undefined,
  });

  const container = window !== undefined ? window().document.body : null;

  const drawerProps = drawerPropsFunc(container, mobileOpen, handleDrawerToggle, drawerWidth);

  return (
    <div className="Navbar__">
      <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavbarMain handleDrawerToggle={handleDrawerToggle} location={undefined} />
          <Box component="nav">
            <Drawer {...drawerProps}>{drawer}</Drawer>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
