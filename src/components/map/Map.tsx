import { accessToken, makerVisibilityFunc, mapStyling, markerPropsFunc, onGeolocateFunc, onMarkerDragEndFunc, reactMapGLPropsFunc } from "./index";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import NavbarMain from "../navbar/subComponents/navbarMain/NavbarMain";
import { DarkModeContext } from "../../context/darkmode";
import { useContext, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style.scss";
import React from "react";

const Map = () => {
  // * React Hooks
  // prettier-ignore
  interface ViewState { longitude: number; latitude: number; zoom: number; }
  const initialViewState: ViewState = { longitude: -97.7431, latitude: 30.2672, zoom: 6 };
  const [viewState, setViewState] = useState<ViewState>(initialViewState);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [location, setLocation] = useState("Austin, TX");

  // * Dark Mode Context
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode } = darkModeContext;

  // * Marker Visibility and handling
  const onMarkerDragEnd = onMarkerDragEndFunc(setViewState, viewState, setLocation);
  const handleAddMarker = () => setMarkerVisible(!markerVisible);
  const makerVisibility = makerVisibilityFunc(markerVisible);

  // * Geolocation handling
  const onGeolocate = onGeolocateFunc(setViewState, viewState, setLocation);

  // * Props
  const mapStyle = mapStyling(darkMode);
  const reactMapGLProps = reactMapGLPropsFunc(setViewState, accessToken, mapStyle);
  const markerProps = markerPropsFunc(viewState, onMarkerDragEnd);

  return (
    <div className="Map__">
      <div className="Map__container">
        <h3>Global Map</h3>
        <ReactMapGL {...reactMapGLProps} {...viewState}>
          {markerVisible && <Marker {...markerProps} />}
          <NavigationControl />
          <GeolocateControl onGeolocate={onGeolocate} />
          <button className="marker-toggle" onClick={handleAddMarker}>
            {makerVisibility}
          </button>
        </ReactMapGL>
        <NavbarMain location={location} />
      </div>
    </div>
  );
};

export default Map;
