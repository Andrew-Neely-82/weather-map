import { DarkModeContext } from "../../context/darkmode";
import { Box, CssBaseline, Drawer } from "@mui/material";
import { drawerPropsFunc, handleDrawer } from "./index";
import { ThemeProvider } from "@mui/material/styles";
import { getLocation } from "../../util/geolocation";
import { darkTheme, lightTheme } from "./themes";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import NavbarMain from "./subComponents/navbarMain/NavbarMain";

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = handleDrawer(handleDrawerToggle);
  const drawerWidth = 240;

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerProps = drawerPropsFunc(container, mobileOpen, handleDrawerToggle, drawerWidth);

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavbarMain handleDrawerToggle={handleDrawerToggle} />
        <Box component="nav">
          <Drawer {...drawerProps}>{drawer}</Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
