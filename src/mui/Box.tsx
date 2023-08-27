import { Box as MuiBox } from "@mui/material";
import React from "react";

interface BoxProps {
  display?: "flex" | "inline-flex" | "block" | "inline-block" | "inline" | "none" | undefined;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ display, children }) => {
  return <MuiBox display={display}>{children}</MuiBox>;
};
export default Box;
