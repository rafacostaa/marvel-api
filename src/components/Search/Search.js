import React from "react";
import "../main.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const Search = (props) => {
  const updateSearchValue = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <>
      <div className="container-search">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
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
