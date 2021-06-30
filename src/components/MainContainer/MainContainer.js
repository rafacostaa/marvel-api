import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import ListItem from "../ListItem/ListItem";
import Pagination from "../Pagination/Pagination";
import "../main.scss";
import Context from "../Context/Context";

const MainContainer = () => {
  const context = useContext(Context);
  console.log("main", context);
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container">
        <Toolbar />
        <div className="main">
          <Header />
          <ListItem />
        </div>
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={100}
          paginate={5}
          prevPageText={"<"}
          nextPageText={">"}
        /> */}
      </div>
    </>
  );
};

export default MainContainer;
