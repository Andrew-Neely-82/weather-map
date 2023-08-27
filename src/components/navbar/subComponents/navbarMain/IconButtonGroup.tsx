import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import React from "react";

const IconButtonGroup = (props: any) => {
  return (
    <IconButton {...props.iconProps} aria-label="open drawer">
      <MenuIcon />
    </IconButton>
  );
};

export default IconButtonGroup;
