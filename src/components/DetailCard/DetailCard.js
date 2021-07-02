import React, { useContext } from "react";
import context from "../Context/Context";
import { useRouteMatch } from "react-router-dom";
import ContainerDetailCard from "../ContainerDetailCard/ContainerDetailCard";

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

  return (
    <>
      {filter?.map(
        ({ id, name, thumbnail, comics, events, series, stories }) => (
          <>
            <div className="container-detail-card" key={id}>
              <div className="image-block">
                <img
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={name}
                />
              </div>
              <div className="detail">
                <h1>{name}</h1>
                <ContainerDetailCard title="Comics" data={comics} />
                <ContainerDetailCard title="Events" data={events} />
                <ContainerDetailCard title="Series" data={series} />
                <ContainerDetailCard title="Stories" data={stories} />
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default DetailCard;
