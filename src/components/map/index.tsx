import React from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocationOffIcon from "@mui/icons-material/LocationOff";

// * Mapbox API key
export const accessToken = process.env.REACT_APP_MAP_KEY;

// * Marker onDragEnd Function for updating map and location state
interface ViewState {
  longitude: number;
  latitude: number;
}

export function onMarkerDragEndFunc(setViewState: React.Dispatch<React.SetStateAction<ViewState>>, viewState: ViewState, setLocation: React.Dispatch<React.SetStateAction<number[]>>) {
  return (event: any) => {
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
export const makerVisibilityFunc = (markerVisible: any) => (markerVisible ? <LocationOffIcon /> : <AddLocationIcon />);

// * handles geolocation display on map
interface ViewState {
  longitude: number;
  latitude: number;
}

export function onGeolocateFunc(setViewState: React.Dispatch<React.SetStateAction<ViewState>>, viewState: ViewState, setLocation: React.Dispatch<React.SetStateAction<number[]>>) {
  return (result: any) => {
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
export const mapStyling = (darkMode: boolean) => (darkMode ? mapTheme.lightMap : mapTheme.darkMap);

// * Props for mapboxgl component
export function reactMapGLPropsFunc(setViewState: (viewState: any) => void, accessToken: any, mapStyle: any) {
  return {
    id: "mapData",
    style: {
      height: "400px",
      width: "100%",
    },
    onMove: (e: any) => setViewState(e.viewState),
    mapboxAccessToken: accessToken,
    mapStyle: mapStyle,
  };
}

// * Props for marker

interface MarkerProps {
  id: string;
  longitude: number;
  latitude: number;
  draggable: boolean;
  onDragEnd: (event: any) => void;
}

export function markerPropsFunc(viewState: { longitude: number; latitude: number }, onMarkerDragEnd: (event: { lngLat: [number, number] }) => void): MarkerProps {
  return {
    id: "map-marker",
    longitude: viewState.longitude,
    latitude: viewState.latitude,
    draggable: true,
    onDragEnd: onMarkerDragEnd,
  };
}
