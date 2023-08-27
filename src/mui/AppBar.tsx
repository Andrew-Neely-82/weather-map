import { AppBar as MuiAppBar } from "@mui/material";
import React from "react";

interface AppBarProps {
  component?: any;
  children?: React.ReactNode;
}

const AppBar: React.FC<AppBarProps> = ({ component, children }) => {
  return <MuiAppBar component={component}>{children}</MuiAppBar>;
};

export default AppBar;
