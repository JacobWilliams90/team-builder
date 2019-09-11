import React from "react";

function Card(props) {
  return (
    <div>
      {props.card.map((card, index) => (
        <div className="card" key={index}>
          <h2>{card.name}</h2>
          <p>{card.email}</p>
          <p>{card.role}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
