import { IconButton as MuiIconButton } from "@mui/material";

const IconButton = ({ color, edge, sx, onClick, children }) => {
  const props = {
    color: color,
    edge: edge,
    sx: sx,
    onClick: onClick,
  };

  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};

export default IconButton;
