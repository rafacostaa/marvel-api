import React from "react";

const PaginationItem = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container-pagination">
        {pageNumbers.map((number) => (
          <a key={number} onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        ))}
      </div>
    </>
  );
};

export default PaginationItem;
