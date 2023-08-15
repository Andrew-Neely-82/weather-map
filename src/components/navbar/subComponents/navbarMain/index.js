import { buttonPropsFunc, muiProps, toolPropsFunc } from "../index";

export const toolbarPropsFunc = (darkMode) => {
  const toolProps = toolPropsFunc(darkMode, themeLight, themeDark);
  const toolbarProps = { ...muiProps.toolbar, ...toolProps };
  return toolbarProps;
};

export const iconPropsFunc = (props) => {
  const iconFunc = buttonPropsFunc(props);
  const iconProps = { ...muiProps.iconButton, ...iconFunc };
  return iconProps;
};

// * themes
export const themeLight = { background: "#efefef", color: "black", boxShadow: "none" };
export const themeDark = { background: "#121212", color: "white", boxShadow: "none" };
export const searchTheme = { background: "#353535", color: "white !important" };
