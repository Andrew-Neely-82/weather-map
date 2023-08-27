import { Box as MuiBox } from "@mui/material";
import React from "react";

interface BoxProps {
  className?: string;
  display?: "flex" | "inline-flex" | "block" | "inline-block" | "inline" | "none" | undefined;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ className, display, children }) => {
  return (
    <MuiBox className={className} display={display}>
      {children}
    </MuiBox>
  );
};
export default Box;
