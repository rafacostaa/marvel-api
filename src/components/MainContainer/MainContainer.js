import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import List from "../List/List";
import "../main.scss";
import context from "../Context/Context";

const MainContainer = () => {
  return (
    <>
      <div className="container">
        <Toolbar />
        <div className="main">
          <Header />
          <List />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
