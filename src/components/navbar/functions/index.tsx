import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface DrawerPropsFunc {
  container: React.ReactNode;
  open: boolean;
  onClose: () => void;
  ModalProps: boolean;
}

interface DrawerProps {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  drawerWidth: number;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleDrawer: React.FC<DrawerProps> = ({ handleDrawerToggle, drawerWidth }) => {
  const navItems = ["Home", "About", "Contact"];

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "start" }}>
      <Typography variant="h6" sx={{ my: 2, marginLeft: 1.5 }}>
        Weather Map
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const drawerPropsFunc = (container: ReactNode, mobileOpen: boolean, handleDrawerToggle: () => void, drawerWidth: number) => {
  return {
    container: container,
    variant: "temporary",
    open: mobileOpen,
    onClose: handleDrawerToggle,
    ModalProps: true,
    sx: {
      display: { xs: "block", sm: "none" },
      "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      background: "#121212 !important",
    },
  } as DrawerPropsFunc;
};

export const handleDrawerToggleFunc = (setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  return () => {
    setMobileOpen((prevState) => !prevState);
  };
};
