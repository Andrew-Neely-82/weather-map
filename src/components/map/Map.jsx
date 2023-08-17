import { buttonProps, icons, mapPropsFunc, mapStyling } from "./index";
import { DarkModeContext } from "../../context/darkmode";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import "./style.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { FullscreenControl, GeolocateControl, Layer, Marker, NavigationControl, Source, useMap } from "react-map-gl";
import NavbarMain from "../navbar/subComponents/navbarMain/NavbarMain";
import { SearchAndToggle } from "../navbar/subComponents/import";

const Map = (props) => {
  const [location, setLocation] = useState("Austin, TX");

  const [viewState, setViewState] = useState({
    longitude: -97.7431,
    latitude: 30.2672,
    zoom: 6,
  });

  const accessToken = process.env.REACT_APP_MAP_KEY;
  const { darkMode } = useContext(DarkModeContext);

  const mapStyle = mapStyling(darkMode);
  const mapProps = mapPropsFunc(accessToken, mapStyle);

  const onMarkerDragEnd = (event) => {
    var { lngLat } = event;

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

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };

  <SearchAndToggle address={location} setAddress={updateLocation} />

  // const searchBar = document.getElementById("search").value;

  return (
    <div className="Map__">
      <div className="Map__container">
        <h3>Global Map</h3>
        {/* <Mapbox {...props} reuseMaps /> */}
        <ReactMapGL id="mapData" {...viewState} style={{ height: "400px" }} onMove={(e) => setViewState(e.viewState)} mapboxAccessToken={accessToken} mapStyle={mapStyle}>
          <FullscreenControl />
          <Marker longitude={viewState.longitude} latitude={viewState.latitude} draggable onDragEnd={onMarkerDragEnd} />
          {/* <Source /> */}
          {/* <Layer /> */}
          <NavigationControl />
          <GeolocateControl />
        </ReactMapGL>
        <NavbarMain location={location} />
      </div>
    </div>
  );
};

export default Map;
