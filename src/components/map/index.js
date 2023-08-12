// * Mabbox API key
export const accessToken = process.env.REACT_APP_MAP_KEY;

// * Map Styles
export const lightMap = "mapbox://styles/mapbox/streets-v9";
export const darkMap = "mapbox://styles/mapbox/navigation-night-v1";

// * Map styling function
export const mapStyling = (darkMode) => {
  return darkMode ? lightMap : darkMap;
};
