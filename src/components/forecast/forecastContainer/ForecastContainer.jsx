import { Today } from "@mui/icons-material";
import SevenDay from "./sevenDay/SevenDay";
import Tomorrow from "./tomorrow/Tomorrow";
import { useState } from "react";
import Switch from "./switch/Switch";

const ForecastContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ForecastContainer__">
      <div className="ForecastContainer__container">
        {/* Today, Tomorrow, Next 7 days */}
        {/* switch */}
        <Switch />
      </div>
      <Today />
      <Tomorrow />
      <SevenDay />
    </div>
  );
};

export default ForecastContainer;
