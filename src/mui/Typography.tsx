import { Typography as MuiTypography } from "@mui/material";
import React from "react";

interface TypographyProps {
  variant?: string;
  component?: React.ElementType;
  sx?: object;
  className?: string;
  text?: any;
}

const Typography: React.FC<TypographyProps> = ({ variant, component, sx, className, text }) => {
  const props = {
    className: className,
    variant: variant,
    component: component,
    sx: sx,
  };

  return <MuiTypography {...props}>{text}</MuiTypography>;
};

export default Typography;
