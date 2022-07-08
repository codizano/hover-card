import React from "react";
import { CardContainer } from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <img className="imgBx" src={props.imagen} alt="img" />
      <div className="content">
        <div className="details">
          <h2>
            Ensalada Cesar
            <br />
            <span> Senior UX/UI Designer</span>
          </h2>
          <div className="actionBtn">
            <button>Follow</button>
            <button>Follow</button>
          </div>
          <div className="data">
            <h3>
              342
              <br />
              <span>Posts</span>
            </h3>
            <h3>
              120k
              <br />
              <span>Followers</span>
            </h3>
            <h3>
              285
              <br />
              <span>Following</span>
            </h3>
          </div>
        </div>
      </div>
      {/*  <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>
      <p className="receta">{props.receta}</p>
      <button className="btn">Ver Receta</button> */}
    </CardContainer>
  );
};

export default Card;
