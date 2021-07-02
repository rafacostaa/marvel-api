import React from "react";
import { Fragment } from "react";
import "../main.scss";

const ListItem = ({ data: { items } }) => {
  const sliced = items.slice(0, 3);
  return (
    <div className="child div2">
      {sliced.map((item) => (
        <Fragment key={item.name}>
          <span>{item.name}</span>
        </Fragment>
      ))}
    </div>
  );
};

export default ListItem;
