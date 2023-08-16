import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import WrongLocationOutlinedIcon from "@mui/icons-material/WrongLocationOutlined";

// * Mabbox API key
export const accessToken = process.env.REACT_APP_MAP_KEY;

// * Map Styles
export const lightMap = "mapbox://styles/mapbox/streets-v9";
export const darkMap = "mapbox://styles/mapbox/navigation-night-v1";

// * Map styling function
export const mapStyling = (darkMode) => {
  return darkMode ? lightMap : darkMap;
};

// * Mapbox props
export const mapProps = (accessToken, long, lat, mapStyle) => {
  return {
    mapboxAccessToken: accessToken,
    initialViewState: {
      longitude: -97.7431,
      latitude: 30.2672,
      zoom: 6,
    },
    style: {
      width: 700,
      height: 400,
      borderRadius: "1.5rem",
    },
    mapStyle: mapStyle,
  };
};

// * Buttons and Icons
export const icons = [<ZoomInIcon />, <ZoomOutIcon />, <AddLocationIcon />, <WrongLocationOutlinedIcon />];

export const buttonProps = {
  variant: "contained",
  sx: {
    minWidth: "1.5rem",
  },
};
