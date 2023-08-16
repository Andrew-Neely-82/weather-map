import { buttonProps, icons, mapProps, mapStyling } from "./index";
import { DarkModeContext } from "../../context/darkmode";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import "./style.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import ReacMapGL, { FullscreenControl, GeolocateControl, Layer, Marker, NavigationControl, Source } from "react-map-gl";

const Map = () => {
  const [viewState, setViewState] = useState({
    longitude: -97.7431,
    latitude: 30.2672,
    zoom: 6,
  });

  const accessToken = process.env.REACT_APP_MAP_KEY;
  const { darkMode } = useContext(DarkModeContext);

  const mapStyle = mapStyling(darkMode);
  const props = mapProps(accessToken, mapStyle);

  return (
    <div className="Map__">
      <div className="Map__container">
        <h3>Global Map</h3>
        {/* <Mapbox {...props} reuseMaps /> */}
        <ReacMapGL {...viewState} style={{ height: "400px" }} onMove={(e) => setViewState(e.viewState)} mapboxAccessToken={accessToken} mapStyle={mapStyle}>
          <FullscreenControl />
          <GeolocateControl />
          {/* <Marker /> */}
          {/* <Source /> */}
          <Layer />
          <NavigationControl />
        </ReacMapGL>
      </div>
    </div>
  );
};

export default Map;
