import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocationOffIcon from "@mui/icons-material/LocationOff";

// * Mapbox API key
export const accessToken = process.env.REACT_APP_MAP_KEY;

// * Marker onDragEnd Function for updating map and location state
export function onMarkerDragEndFunc(setViewState, viewState, setLocation) {
  return (event) => {
    let { lngLat } = event;

    const longitude = lngLat.lng;
    const latitude = lngLat.lat;

    // Set the new view state
    setViewState({
      ...viewState,
      longitude,
      latitude,
    });

    const position = [longitude, latitude];

    // Update the location state
    setLocation(position);
  };
}

// * Changes the show marker svg
export const makerVisibilityFunc = (markerVisible) => (markerVisible ? <LocationOffIcon /> : <AddLocationIcon />);

// * handles geolocation display on map
export function onGeolocateFunc(setViewState, viewState, setLocation) {
  return (result) => {
    // The geolocate control doesn't provide direct access to the updated location.
    // You need to extract the location from the result object.
    const { coords } = result;
    const { longitude, latitude } = coords;

    // Set the new view state
    setViewState({
      ...viewState,
      longitude,
      latitude,
    });

    const position = [longitude, latitude];

    // Update the location state
    setLocation(position);
  };
}

// * Map styling function
const mapTheme = { lightMap: "mapbox://styles/mapbox/streets-v9", darkMap: "mapbox://styles/mapbox/navigation-night-v1" };
export const mapStyling = (darkMode) => (darkMode ? mapTheme.lightMap : mapTheme.darkMap);

// * Props for mapboxgl component
export function reactMapGLPropsFunc(setViewState, accessToken, mapStyle) {
  return {
    id: "mapData",
    style: {
      height: "400px",
    },
    onMove: (e) => setViewState(e.viewState),
    mapboxAccessToken: accessToken,
    mapStyle: mapStyle,
  };
}

// * Props for marker
export function markerPropsFunc(viewState, onMarkerDragEnd) {
  return {
    id: "map-marker",
    longitude: viewState.longitude,
    latitude: viewState.latitude,
    draggable: true,
    onDragEnd: onMarkerDragEnd,
  };
}
