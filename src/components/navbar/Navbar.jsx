import { DarkModeContext } from "../../context/darkmode";
import { Box, CssBaseline, Drawer } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NavbarMain from "./subComponents/NavbarMain";
import { darkTheme, lightTheme } from "./themes";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { handleDrawer } from ".";
import "./style.scss";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = handleDrawer(handleDrawerToggle);

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavbarMain handleDrawerToggle={handleDrawerToggle} />
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary" /* allows off modal touch to close */
            open={mobileOpen} /* useState hook */
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
              background: "#121212 !important",
            }}>
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
