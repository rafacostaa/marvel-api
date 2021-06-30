import React from "react";
import "../main.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const Search = () => {
  const handleSearch = (event) => {
    const query = event.target.value;
    console.log("input", query);
  };
  return (
    <>
      <div class="container-search">
        <input
          type="text"
          placeholder="Search"
          class="search-input"
          onChange={handleSearch}
        />
        <button>
          <SearchRoundedIcon className="icon" />
        </button>
      </div>
    </>
  );
};

export default Search;
