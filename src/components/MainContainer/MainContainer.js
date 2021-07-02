import React from "react";
import Header from "../Header/Header";
import List from "../List/List";
import "../main.scss";

const MainContainer = () => {
  return (
    <>
      <div className="main">
        <Header />
        <List />
      </div>
    </>
  );
};

export default MainContainer;
