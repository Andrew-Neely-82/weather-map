import { getLocation } from "./util/geolocation";
import { Navbar } from "./components/export";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;

getLocation();
