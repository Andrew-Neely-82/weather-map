import { AppBar, Button, Box, Toolbar, Typography } from "../../../../mui/export";
import { iconPropsFunc, searchTheme, toolbarPropsFunc } from "./index";
import { DarkModeContext } from "../../../../context/darkmode";
import { DarkModeSwitch, SearchAndToggle } from "../import";
import { muiProps, switchPropsFunc } from "../index";
import IconButtonGroup from "./IconButtonGroup";
import { useContext, useEffect, useState } from "react";
import React from "react";

interface NavbarMainProps {
  location: any;
  handleDrawerToggle: () => any;
}

const NavbarMain: React.FC<NavbarMainProps> = (props, { handleDrawerToggle }) => {
  const [address, setAddress] = useState(props.location);
  const navItems = ["Home", "About", "Contact"];

  // * Dark Mode Handling
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) return null;
  const { darkMode, toggleDarkMode } = darkModeContext;

  // * Props
  const toolbarProps = toolbarPropsFunc(darkMode);
  const switchProps = switchPropsFunc(darkMode, toggleDarkMode);
  const iconProps = iconPropsFunc(props);

  const accessToken = process.env.REACT_APP_MAP_KEY;
  const initialUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&access_token=${accessToken}`;

  const getAddress = async () => {
    try {
      const response = await fetch(initialUrl);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const placeName = data.features[0].place_name;
        setAddress(placeName);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  getAddress();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setAddress(props.location);
  }, [props.location]);

  return (
    <AppBar component="nav">
      <Toolbar {...toolbarProps}>
        <IconButtonGroup iconProps={iconProps} />
        <Typography {...muiProps.typography} text={address} component="div" variant="body1" />
        <Button variant="text" color="inherit" text="Get Weather" />
        <Box {...muiProps.box} className="buttons">
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }} text={item} variant={"text"} color={"inherit"} />
          ))}
        </Box>
        <SearchAndToggle
          address={address}
          setAddress={function (): void {
            throw new Error("Function not implemented.");
          }}
          props={undefined}
        />
        <DarkModeSwitch {...switchProps} />
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMain;
