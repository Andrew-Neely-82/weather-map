import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

export const handleDrawer = (handleDrawerToggle) => {
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
