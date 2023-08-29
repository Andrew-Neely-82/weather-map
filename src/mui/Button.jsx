import { Button as MuiButton } from "@mui/material";
import React from "react";

// interface ButtonProps {
//   variant?: string;
//   color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
//   href?: string;
//   startIcon?: React.ReactNode;
//   endIcon?: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   text?: string;
//   sx?: object;
// }

const Button = ({ variant, color, href, startIcon, endIcon, onClick, text, sx }) => {
  const props = {
    variant: variant,
    color: color,
    href: href,
    onClick: onClick,
    startIcon: startIcon,
    endIcon: endIcon,
    sx: sx,
  };

  <MuiButton {...props}>{text}</MuiButton>;
};

export default Button;

// * 'text' for anchor like look
// * 'contained' for for normal button
// * 'outlined' for outlined button
