import React from "react";
import "../main.scss";

const Series = ({ data: { items } }) => {
  //   console.log(items);

  const sliced = items.slice(0, 3);
  return (
    <div className="child div2">
      {sliced.map((item) => (
        <span>{item.name}</span>
      ))}
    </div>
  );
};

export default Series;
