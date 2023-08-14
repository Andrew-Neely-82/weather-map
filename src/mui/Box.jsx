import { Box as MuiBox } from "@mui/material";

const Box = ({ display, children }) => {
  return <MuiBox display={display}>{children}</MuiBox>;
};
export default Box;
