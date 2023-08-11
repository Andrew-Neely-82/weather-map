import { Box, CssBaseline, Drawer } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NavbarMain from "./subComponents/NavbarMain";
import { darkTheme, lightTheme } from "./themes";
import PropTypes from "prop-types";
import { useState } from "react";
import { handleDrawer } from ".";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = handleDrawer(handleDrawerToggle);

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
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
