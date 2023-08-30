import { Box as MuiBox } from "@mui/material";
import React from "react";

interface BoxProps {
  className?: any;
  display?: any;
  children: any;
}

const Box: React.FC<BoxProps> = ({ className, display, children }) => {
  return (
    <MuiBox className={className} display={display}>
      {children}
    </MuiBox>
  );
};

export default Box;
