import { Navbar, Forecast, Map } from "./components/export";
import ChanceOfRain from "./components/chanceOfRain/ChanceOfRain";
import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="content">
        <div className="forecast-rain-container">
          {/* <ForecastContainer /> */}
          <Forecast />
          <ChanceOfRain />
        </div>

        <div className="GlobalContainer__">
          <Map />
        </div>
      </div>
    </>
  );
};

export default App;
