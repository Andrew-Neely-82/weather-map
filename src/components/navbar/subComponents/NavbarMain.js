import { AppBar, Button, Box, IconButton, Toolbar, Typography } from "../../../mui/export";
import { buttonPropsFunc, muiProps, switchPropsFunc, toolPropsFunc } from "./index";
import { DarkModeContext } from "../../../context/darkmode";
import { DarkModeSwitch, SearchAndToggle } from "./import";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";

const NavbarMain = (props) => {
  const navItems = ["Home", "About", "Contact"];
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // * themes
  const themeLight = { background: "#efefef", color: "black", boxShadow: "none" };
  const themeDark = { background: "#121212", color: "white", boxShadow: "none" };
  const searchTheme = { background: "#353535", color: "white !important" };

  // * props
  const toolProps = toolPropsFunc(darkMode, themeLight, themeDark);
  const toolbarProps = { ...muiProps.toolbar, ...toolProps };

  const iconFunc = buttonPropsFunc(props);
  const iconProps = { ...muiProps.iconButton, ...iconFunc };

  const switchProps = switchPropsFunc(darkMode, toggleDarkMode);

  return (
    <AppBar component="nav">
      <Toolbar {...toolbarProps}>
        <IconButton {...iconProps} aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography {...muiProps.typography} />
        <Box {...muiProps.box} className="buttons">
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }} text={item} />
          ))}
        </Box>
        <SearchAndToggle searchTheme={searchTheme} />
        <DarkModeSwitch {...switchProps} />
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMain;
