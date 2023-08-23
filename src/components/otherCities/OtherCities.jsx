import "./style.scss";

const OtherCities = () => {
  return (
    <div className="OtherCities__">
      <h3>Other Cities</h3>
      <div className="city-container">
        <span className="country">US</span>
        <span className="city">NYC</span>
        <span className="condition">Mostly Sunny</span>
      </div>
      <div className="weather-condition-container">
        <span className="weather-condition"></span>
        <span>TEMP°F</span>
      </div>
    </div>
  );
};

export default OtherCities;
