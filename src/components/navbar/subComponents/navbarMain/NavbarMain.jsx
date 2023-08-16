import { AppBar, Button, Box, Toolbar, Typography } from "../../../../mui/export";
import { iconPropsFunc, searchTheme, toolbarPropsFunc } from "./index";
import { DarkModeContext } from "../../../../context/darkmode";
import { DarkModeSwitch, SearchAndToggle } from "../import";
import { muiProps, switchPropsFunc } from "../index";
import IconButtonGroup from "./IconButtonGroup";
import { useContext, useEffect, useState } from "react";

const NavbarMain = (props) => {
  // State to store the address
  const [address, setAddress] = useState(props.location);
  // console.log("Received location:", props.location);

  const navItems = ["Home", "About", "Contact"];
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const toolbarProps = toolbarPropsFunc(darkMode);
  const switchProps = switchPropsFunc(darkMode, toggleDarkMode);
  const iconProps = iconPropsFunc(props);

  const accessToken = process.env.REACT_APP_MAP_KEY;

  // Construct the initial API URL using props.location
  const initialUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&access_token=${accessToken}`;

  const getAddress = async () => {
    try {
      const response = await fetch(initialUrl);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const placeName = data.features[0].place_name;
        setAddress(placeName);
        // props.setLocation(placeName);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  useEffect(() => {
    setAddress(props.location);
  }, [props.location]);



  getAddress();

  return (
    <AppBar component="nav">
      <Toolbar {...toolbarProps}>
        <IconButtonGroup iconProps={iconProps} />
        <Typography {...muiProps.typography} text={address} />
        <Button>Get Weather</Button>
        <Box {...muiProps.box} className="buttons">
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }} text={item} />
          ))}
        </Box>
        <SearchAndToggle searchTheme={searchTheme} />
        <DarkModeSwitch {...switchProps} />
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMain;
