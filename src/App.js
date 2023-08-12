import { getLocation } from "./util/geolocation";
import { Navbar } from "./components/export";
import Map from "./components/map/Map";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Map />
      </div>
    </div>
  );
};

export default App;

getLocation();
