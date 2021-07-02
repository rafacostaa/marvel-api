import React, { useContext } from "react";
import context from "../Context/Context";
import { useRouteMatch, useHistory } from "react-router-dom";
import ContainerDetailCard from "../ContainerDetailCard/ContainerDetailCard";

import "../main.scss";

const DetailCard = () => {
  const routeMatch = useRouteMatch();
  const { id } = routeMatch.params;
  const idParams = parseInt(id);
  const data = useContext(context);
  const filter = data?.filter((item) => item.id === idParams);
  const history = useHistory();

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
              <h1>{name}</h1>
              <div className="detail">
                <ContainerDetailCard title="Comics" data={comics} />
                <ContainerDetailCard title="Events" data={events} />
                <ContainerDetailCard title="Series" data={series} />
                <ContainerDetailCard title="Stories" data={stories} />
              </div>
              <button onClick={() => history.push("/")}>Voltar</button>
            </div>
          </>
        )
      )}
    </>
  );
};

export default DetailCard;
