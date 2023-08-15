import { Button as MuiButton } from "@mui/material";

const Button = ({ variant, color, href, startIcon, endIcon, onClick, text }) => {
  const props = {
    variant: variant,
    color: color,
    href: href,
    onClick: onClick,
    startIcon: startIcon,
    endIcon: endIcon,
  };

  <MuiButton {...props}>{text}</MuiButton>;
};

export default Button;

// * 'text' for anchor like look
// * 'contained' for for normal button
// * 'outlined' for outlined button
