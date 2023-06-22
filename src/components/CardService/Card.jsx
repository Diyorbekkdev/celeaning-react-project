import React from "react";
import style from './card.module.scss';

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={props.img} alt="card img" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
