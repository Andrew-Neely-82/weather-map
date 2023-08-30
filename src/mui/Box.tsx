import { Box as MuiBox } from "@mui/material";
import React from "react";

interface BoxProps {
  className?: string;
  display?: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ className, display, children }) => {
  return (
    <MuiBox className={className} display={display}>
      {children}
    </MuiBox>
  );
};

export default Box;
