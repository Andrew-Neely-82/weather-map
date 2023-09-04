import { Search, SearchIconWrapper, StyledInputBase } from "../../functions/Search";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { searchToggleProps } from "../index";
import { searchTheme } from "../navbarMain";

interface SearchAndToggleProps {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  address: any;
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
      const inputElement = event.target as HTMLInputElement;
      setInputValue(inputElement.value);
      props.setAddress(inputElement.value);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    setInputValue("");
    const searchElement = document.getElementById("search") as HTMLInputElement;
    if (searchElement) {
      searchElement.value = "";
    }
  };

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
      {inputValue && (
        <button className="clear" onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
};

export default SearchAndToggle;
