const Days = ({ day, condition, temp }) => {
  return (
    <div className="Day__">
      <span>{day}</span>
      <hr />
      {condition}
      <span>{temp}°</span>
    </div>
  );
};

export default Days;
