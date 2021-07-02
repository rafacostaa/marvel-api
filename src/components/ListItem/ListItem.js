import React from "react";
import "../main.scss";

const ListItem = ({ data: { items } }) => {
  const sliced = items.slice(0, 3);
  return (
    <div className="child div2">
      {sliced.map((item) => (
        <span>{item.name}</span>
      ))}
    </div>
  );
};

export default ListItem;
