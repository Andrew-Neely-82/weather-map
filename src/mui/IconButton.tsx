import { IconButton as MuiIconButton } from "@mui/material";
import React from "react";

interface IconButtonProps {
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
  edge?: "start" | "end" | false | undefined;
  sx?: object;
  onClick?: () => void;
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ color, edge, sx, onClick, children }) => {
  const props = {
    color: color,
    edge: edge,
    sx: sx,
    onClick: onClick,
  };

  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};

export default IconButton;
