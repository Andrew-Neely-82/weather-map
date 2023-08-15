const Days = ({ day, condition, temp }) => {
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
