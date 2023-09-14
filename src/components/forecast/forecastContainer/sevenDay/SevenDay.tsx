import React, { useState } from "react";
import Days from "./days/Days";

const SevenDay: React.FC = () => {
  const [days, setDays] = useState(Array(6).fill(null));

  return (
    <div className="SevenDay__">
      {/* {days.map((day, key) => {
        <Days key={key} />;
      })} */}
      <Days day={"Tue"} condition={"Isolate storms"} temp={10} />
      <Days day={"Wed"} condition={"light rain"} temp={10} />
      <Days day={"Thu"} condition={"partly cloudy"} temp={10} />
      <Days day={"Fri"} condition={"partly cloudy"} temp={10} />
      <Days day={"Sat"} condition={"thunder storms"} temp={10} />
      <Days day={"Sun"} condition={"rain"} temp={10} />
    </div>
  );
};

export default SevenDay;

// * uncomment when weather is figured out
