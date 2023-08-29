import { Search, SearchIconWrapper, StyledInputBase } from "../../functions/Search";
import SearchIcon from "@mui/icons-material/Search";
import { searchToggleProps } from "../index";
import React, { useEffect, useState } from "react";

interface SearchAndToggleProps {
  address: any;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  props: any;
}

const SearchAndToggle: React.FC<SearchAndToggleProps> = (props) => {
  const [search, setSearch] = useState("Search City...");
  const [inputValue, setInputValue] = useState("");

  const propList = searchToggleProps(props);

  useEffect(() => {
    // Update the search state when the address prop changes
    setSearch(props.address);
  }, [props.address]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Handle the action you want to perform on Enter key press
      setInputValue(inputValue);
      console.log(inputValue);
      props.setAddress(inputValue);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div {...propList.container}>
      <Search {...propList.search}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase id="search" onChange={handleInputChange} onKeyDown={handleKeyDown} inputProps={{ "aria-label": "search" }} {...propList.input} placeholder={search} />
      </Search>
    </div>
  );
};

export default SearchAndToggle;
