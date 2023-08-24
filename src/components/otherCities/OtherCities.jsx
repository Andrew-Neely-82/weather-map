import City from "./City";
import "./style.scss";

const OtherCities = () => {
  const cityProps = {
    country: "USA",
    city: "New York",
    condition: "Cloudy",
    icon: "☁️",
    temp: "72",
  };

  return (
    <div className="OtherCities__">
      <h3>Other Cities</h3>
      <City {...cityProps} />
      <br />
      <City {...cityProps} />
      <br />
      <City {...cityProps} />
    </div>
  );
};

export default OtherCities;
