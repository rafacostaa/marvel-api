import React, { useContext } from "react";
import context from "../Context/Context";
import { useRouteMatch } from "react-router-dom";

import "../main.scss";

const DetailCard = () => {
  const routeMatch = useRouteMatch();
  const { id } = routeMatch.params;
  const idParams = parseInt(id);
  console.log("det", typeof idParams);

  const data = useContext(context);
  console.log("det", data);

  const filter = data?.filter((item) => item.id === idParams);
  console.log("filter", filter);

  return <div className="container-detail">Card{idParams}</div>;
};

export default DetailCard;
