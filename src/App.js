import { ForecastContainer, Navbar } from "./components/export";
import ChanceOfRain from "./components/chanceOfRain/ChanceOfRain";
import { getLocation } from "./util/geolocation";
import Map from "./components/map/Map";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* Wrapper */}
      <div className="content">
        {/* Top half */}
        <div className="map-rain-container">
          <ForecastContainer />
          <ChanceOfRain />
        </div>
        {/* Bottom Half */}
        <div className="GlobalContainer__">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;

getLocation();
