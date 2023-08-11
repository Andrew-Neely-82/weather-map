import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { muiProps } from "./index";

const NavbarMain = (props) => {
  const navItems = ["Home", "About", "Contact"];

  return (
    <AppBar component="nav">
      <Toolbar {...muiProps.toolbar}>
        <IconButton {...muiProps.iconButton} onClick={props.handleDrawerToggle} aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography {...muiProps.typography}>Weather Map</Typography>
        <Box {...muiProps.box}>
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
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMain;
