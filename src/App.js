import { ForecastContainer, Navbar } from "./components/export";
import { getLocation } from "./util/geolocation";
import Map from "./components/map/Map";
import "./App.scss";
import ChanceOfRain from "./components/chanceOfRain/ChanceOfRain";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ForecastContainer />
        <Map />
        <ChanceOfRain />
      </div>
    </div>
  );
};

export default App;

getLocation();
