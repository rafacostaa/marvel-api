import React from "react";
import "../main.scss";

const ContainerDetailcard = (data) => {
  const {
    data: { items },
  } = data;
  return (
    <>
      <h2>{data.title}</h2>
      {items.map(({ name }) => (
        <>
          <ul className="container-detail">
            <li>{name}</li>
          </ul>
        </>
      ))}
    </>
  );
};

export default ContainerDetailcard;
