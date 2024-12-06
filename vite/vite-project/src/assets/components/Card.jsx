import React from 'react';
// import pic from "../../image/flappy_bird.png"
import "./Card.css"
const Card = (props) => {
  return (
    <div>
        <div className="card">
      <h2>{props.name}</h2>
      <img src={props.pic} alt="bird" />
      <h2>{props.roll}</h2>
      
    </div></div>
  );
}

export default Card;