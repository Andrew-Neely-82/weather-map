import { Search, SearchIconWrapper, StyledInputBase } from "../../functions/Search";
import SearchIcon from "@mui/icons-material/Search";
import { searchToggleProps } from "../index";
import React, { useEffect, useState } from "react";
import { searchTheme } from "../navbarMain";

// prettier-ignore
interface SearchAndToggleProps { setAddress: React.Dispatch<React.SetStateAction<string>>; address: any;  props: any;}

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const styledInputBaseProps = {
    sx: searchTheme,
    id: "search",
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    inputProps: { "aria-label": "search" },
    ...propList.input,
    placeholder: search,
  };

  return (
    <div {...propList.container}>
      <Search {...propList.search}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase {...styledInputBaseProps} />
      </Search>
    </div>
  );
};

export default SearchAndToggle;
