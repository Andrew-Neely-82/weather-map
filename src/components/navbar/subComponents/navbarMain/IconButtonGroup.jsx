import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const IconButtonGroup = (props) => {
  return (
    <IconButton {...props.iconProps} aria-label="open drawer">
      <MenuIcon />
    </IconButton>
  );
};

export default IconButtonGroup;
