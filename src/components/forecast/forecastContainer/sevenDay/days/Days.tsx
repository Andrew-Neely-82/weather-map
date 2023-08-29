import React from "react";

interface Props {
  day: string;
  condition: string;
  temp: number;
}

const Days: React.FC<Props> = ({ day, condition, temp }) => {
  return (
    <div className="Day__">
      <span>{day}</span>
      <hr />
      {condition}
      <span>{temp}°F</span>
    </div>
  );
};

export default Days;
