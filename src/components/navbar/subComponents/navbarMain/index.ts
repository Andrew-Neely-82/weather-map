import { buttonPropsFunc, muiProps, toolPropsFunc } from "../index";

export const toolbarPropsFunc = (darkMode: boolean) => {
  const toolProps = toolPropsFunc(darkMode, themeLight, themeDark);
  const toolbarProps = { ...muiProps.toolbar, ...toolProps };
  return toolbarProps;
};

export const iconPropsFunc = (props: any) => {
  const iconFunc = buttonPropsFunc(props);
  const iconProps = { ...muiProps.iconButton, ...iconFunc };
  return iconProps;
};

// prettier-ignore
interface Themes { background: string; color: string; boxShadow?: string; borderRadius?: string; }

// * themes
export const themeLight: Themes = { background: "#efefef", color: "black", boxShadow: "none" };
export const themeDark: Themes = { background: "#121212", color: "white", boxShadow: "none" };
export const searchTheme: Themes = { background: "#353535", color: "white !important", borderRadius: "10rem" };

// * mapbox geocode api
const accessToken = process.env.REACT_APP_MAP_KEY;
export const initialUrlFunc = (address: any) => {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&access_token=${accessToken}`;
};
