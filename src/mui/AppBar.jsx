import { AppBar as MuiAppBar } from "@mui/material";

const AppBar = ({ component, children }) => {
  return <MuiAppBar component={component}>{children}</MuiAppBar>;
};

export default AppBar;
