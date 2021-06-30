import React, { useContext, Fragment } from "react";
import Series from "../Series/Series";
import context from "../Context/Context";
import "../main.scss";

const ListItem = () => {
  const data = useContext(context);
  console.log("list", data);
  return (
    <>
      <div className="title-list">
        <div className="child">Personagem</div>
        <div className="child">Séries</div>
        <div className="child">Eventos</div>
      </div>
      {data &&
        data.map((item) => (
          <Fragment key={item.id}>
            <div className="container-list">
              <div className="child div1">
                <img src="https://picsum.photos/50" alt="avatar" />
                <h3>{item.name}</h3>
              </div>
              <Series data={item.series} />
              {/* <div className="child div2">
                <span>Iron Man: Armor Wars</span>
                <span>Old Man Hawkeye</span>
                <span>Fantastic Four Visionaries: Walter Simonson Vol.1</span>
              </div> */}
              <Series data={item.events} />
              {/* <div className="child div2">
                <span>Avx</span>
                <span>Demon in the Bottle</span>
                <span>Dynasty M</span>
              </div> */}
            </div>
          </Fragment>
        ))}
    </>
  );
};

export default ListItem;
