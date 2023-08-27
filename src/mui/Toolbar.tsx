import { Toolbar as MuiToolbar } from "@mui/material";
import React from "react";

interface ToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  sx?: object;
  children?: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ className, style, sx, children }) => {
  const props = {
    className: className,
    style: style,
    sx: sx,
  };

  return <MuiToolbar {...props}>{children}</MuiToolbar>;
};

export default Toolbar;
