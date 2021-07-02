import React from "react";
import "../main.scss";

const ContainerDetailcard = (data) => {
  const {
    data: { items },
  } = data;
  return (
    <>
      <div className="container-detail">
        <h2>{data.title}</h2>
        {items.map(({ name }) => (
          <li>{name}</li>
        ))}
      </div>
    </>
  );
};

export default ContainerDetailcard;
