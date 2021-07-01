import React, { useContext, useState, Fragment } from "react";
import ListItem from "../ListItem/ListItem";
import context from "../Context/Context";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PaginationItem from "../PaginationItem/PaginationItem";
import "../main.scss";

const List = () => {
  const data = useContext(context);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  console.log("list", data);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredDataSliced = filteredData?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  console.log(">>>>", filteredDataSliced);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="container-search">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <button>
          <SearchRoundedIcon className="icon" />
        </button>
      </div>
      <div className="title-list">
        <div className="child">Personagem</div>
        <div className="child">Séries</div>
        <div className="child">Eventos</div>
      </div>

      {filteredDataSliced?.map((item) => (
        <Fragment key={item.id}>
          <div className="container-list">
            <div className="child div1">
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.name}
              />
              <h3>{item.name}</h3>
            </div>
            <ListItem data={item.series} />
            <ListItem data={item.events} />
          </div>
        </Fragment>
      ))}
      <PaginationItem
        postsPerPage={postsPerPage}
        totalPosts={data?.length}
        paginate={paginate}
      />
    </>
  );
};

export default List;
