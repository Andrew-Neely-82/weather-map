import { Box as MuiBox } from "@mui/material";
import React from "react";

const Box = ({ className, display, children }) => {
  return (
    <MuiBox className={className} display={display}>
      {children}
    </MuiBox>
  );
};
export default Box;
