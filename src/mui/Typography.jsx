import { Typography as MuiTypography } from "@mui/material";

const Typography = ({ variant, component, sx, className, text }) => {
  const props = {
    className: className,
    variant: variant,
    component: component,
    sx: sx,
  };

  return <MuiTypography {...props}>{text}</MuiTypography>;
};

export default Typography;
