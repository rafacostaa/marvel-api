import React from "react";
import "../main.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const Search = (props) => {
  const updateSearchValue = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <>
      <div class="container-search">
        <input
          type="text"
          placeholder="Search"
          class="search-input"
          onChange={updateSearchValue}
        />
        <button>
          <SearchRoundedIcon className="icon" />
        </button>
      </div>
    </>
  );
};

export default Search;
