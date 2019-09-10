import React from "react";

function Card(props) {
  return (
    <>
      {props.card.map((card, index) => (
        <div className="card" key={index}>
          <h2>{card.name}</h2>
          <p>{card.email}</p>
          <p>{card.role}</p>
        </div>
      ))}
    </>
  );
}

export default Card;