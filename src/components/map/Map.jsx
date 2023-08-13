import { DarkModeContext } from "../../context/darkmode";
import { Map as Mapbox } from "react-map-gl";
import { useContext } from "react";
import { mapStyling } from ".";
import "./style.scss";

const Map = () => {
  const accessToken = process.env.REACT_APP_MAP_KEY;
  const { darkMode } = useContext(DarkModeContext);

  const mapStyle = mapStyling(darkMode);

  return (
    <div className="Map__">
      <div className="Map__container">
        <h3>Global Map</h3>
        <Mapbox
          mapboxAccessToken={accessToken}
          initialViewState={{
            longitude: -97.7431,
            latitude: 30.2672,
            zoom: 6,
          }}
          style={{ width: 600, height: 400, borderRadius: "1.5rem" }}
          mapStyle={mapStyle}
          reuseMaps
        />
      </div>
    </div>
  );
};

export default Map;
