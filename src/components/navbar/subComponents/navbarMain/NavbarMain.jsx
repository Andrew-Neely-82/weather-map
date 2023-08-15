import { AppBar, Button, Box, Toolbar, Typography } from "../../../../mui/export";
import { iconPropsFunc, searchTheme, toolbarPropsFunc } from "./index";
import { DarkModeContext } from "../../../../context/darkmode";
import { DarkModeSwitch, SearchAndToggle } from "../import";
import { muiProps, switchPropsFunc } from "../index";
import IconButtonGroup from "./IconButtonGroup";
import { useContext } from "react";

const NavbarMain = (props) => {
  const navItems = ["Home", "About", "Contact"];
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // * props
  const toolbarProps = toolbarPropsFunc(darkMode);
  const switchProps = switchPropsFunc(darkMode, toggleDarkMode);
  const iconProps = iconPropsFunc(props);

  return (
    <AppBar component="nav">
      <Toolbar {...toolbarProps}>
        <IconButtonGroup iconProps={iconProps} />
        <Typography {...muiProps.typography} />
        <Button>Get Weather</Button>
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
