import React, { useState } from "react";
import Days from "./days/Days";

const SevenDay: React.FC = () => {
  const [days, setDays] = useState(Array(6).fill(null));

  return (
    <div className="SevenDay__">
      {/* {days.map((day, key) => {
        <Days key={key} />;
      })} */}
      <Days day={""} condition={""} temp={10} />
    </div>
  );
};

export default SevenDay;

// * uncomment when weather is figured out
