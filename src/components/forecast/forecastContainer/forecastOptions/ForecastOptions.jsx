import { Button } from "@mui/material";

const ForecastOptions = () => {
  return (
    <div className="ForecastOptions__">
      <Button variant="text">Today</Button>
      <Button variant="text">Tomorrow</Button>
      <Button variant="text">Next 7 days</Button>
    </div>
  );
};

export default ForecastOptions;
