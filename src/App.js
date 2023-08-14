import { ForecastContainer, Navbar } from "./components/export";
import ChanceOfRain from "./components/chanceOfRain/ChanceOfRain";
import { getLocation } from "./util/geolocation";
import Map from "./components/map/Map";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ForecastContainer />
        <div className="map-rain-container">
          <Map />
          <ChanceOfRain />
        </div>
      </div>
    </div>
  );
};

export default App;

getLocation();
