import { Search, SearchIconWrapper, StyledInputBase } from "../../functions/Search";
import SearchIcon from "@mui/icons-material/Search";
import { searchToggleProps } from "../index";

const SearchAndToggle = (props) => {
  const propList = searchToggleProps(props);

  return (
    <div {...propList.container}>
      <Search {...propList.search}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase inputProps={{ "aria-label": "search" }} {...propList.input} />
      </Search>
    </div>
  );
};

export default SearchAndToggle;
