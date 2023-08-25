import City from "./City";
import React from "react";
import "./style.scss";

interface CityPropsInterface {
  country: string;
  city: string;
  condition: string;
  icon: string;
  temp: number;
}

const cityProps: CityPropsInterface[] = [
  { country: "USA", city: "New York", condition: "Cloudy", icon: "☁️", temp: 72 },
  { country: "Canada", city: "Toronto", condition: "Rainy", icon: "🌧️", temp: 60 },
  { country: "Mexico", city: "Mexico City", condition: "Sunny", icon: "☀️", temp: 92 },
];

const OtherCities = () => {
  return (
    <div className="OtherCities__">
      <h3>Other Cities</h3>
      {cityProps.map((cityProps, index) => (
        <React.Fragment key={index}>
          <City {...cityProps} />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default OtherCities;
