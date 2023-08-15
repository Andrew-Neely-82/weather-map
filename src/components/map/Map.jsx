import { DarkModeContext } from "../../context/darkmode";
import { Map as Mapbox } from "react-map-gl";
import { mapProps, mapStyling } from "./index";
import { useContext } from "react";
import "./style.scss";

const Map = () => {
  const accessToken = process.env.REACT_APP_MAP_KEY;
  const { darkMode } = useContext(DarkModeContext);

  const mapStyle = mapStyling(darkMode);
  const props = mapProps(accessToken, mapStyle);

  return (
    <div className="Map__">
      <div className="Map__container">
        <h3>Global Map</h3>
        <Mapbox {...props} reuseMaps />
      </div>
    </div>
  );
};

export default Map;
