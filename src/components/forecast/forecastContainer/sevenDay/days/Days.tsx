import React from "react";

interface Props {
  day: string;
  condition: string;
  temp: number;
  style?: React.CSSProperties;
}

const Days: React.FC<Props> = ({ style, day, condition, temp }) => {
  return (
    <div className="Day__">
      <span style={style}>{day}</span>
      <hr />
      <span style={style}>{condition}</span>
      <span style={style}>{temp}°F</span>
    </div>
  );
};

export default Days;
