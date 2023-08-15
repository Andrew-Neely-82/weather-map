import { Toolbar as MuiToolbar } from "@mui/material";

const Toolbar = ({ className, style, sx, children }) => {
  const props = {
    className: className,
    style: style,
    sx: sx,
  };

  return <MuiToolbar {...props}>{children}</MuiToolbar>;
};

export default Toolbar;
