import { Toolbar, Typography } from "@mui/material";
import { DarkModeContext } from "../../../context/darkmode";
import { DarkModeSwitch, SearchAndToggle } from "./import";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { muiProps } from "./index";
import { AppBar, Button, Box, IconButton } from "../../../mui/export";

const NavbarMain = (props) => {
  const navItems = ["Home", "About", "Contact"];
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const themeLight = { background: "#efefef", color: "black", boxShadow: "none" };
  const themeDark = { background: "#121212", color: "white", boxShadow: "none" };
  const searchTheme = { background: "#353535", color: "white !important" };

  return (
    <AppBar component="nav">
      <Toolbar {...muiProps.toolbar} style={darkMode ? themeLight : themeDark}>
        <IconButton {...muiProps.iconButton} onClick={props.handleDrawerToggle} aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography {...muiProps.typography}>Weather Map</Typography>
        <Box {...muiProps.box} className="buttons">
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }} text={item} />
          ))}
        </Box>
        <SearchAndToggle searchTheme={searchTheme}></SearchAndToggle>
        <DarkModeSwitch checked={!darkMode} onChange={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMain;
