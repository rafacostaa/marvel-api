import React from "react";
import Search from "../Search/Search";
import "../main.scss";

const Header = () => {
  return (
    <div className="container-header">
      <h1>Busca de personagens</h1>
      <h3>Nome do personagem</h3>
      <Search />
    </div>
  );
};

export default Header;
