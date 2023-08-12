import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search";
import { DarkModeContext } from "../../../context/darkmode";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeSwitch from "./DarkModeSwitch";
import { muiProps } from "./index";
import { useContext } from "react";

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
            <Button
              key={item}
              sx={{
                color: "#fff",
              }}>
              {item}
            </Button>
          ))}
        </Box>
        <div className="toggle/search" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <DarkModeSwitch checked={!darkMode} onChange={toggleDarkMode} />
          <Search style={searchTheme} sx={{ color: "white", borderRadius: "10rem" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          </Search>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMain;
