import { useState } from "react";
import Days from "./days/Days";

const SevenDay = () => {
  const [days, setDays] = useState(Array(6).fill(null));

  return (
    <div className="SevenDay__">
      {/* {days.map((day, key) => {
        <Days key={key} />;
      })} */}
      <Days />
    </div>
  );
};

export default SevenDay;

// * uncomment when weather is figured out
