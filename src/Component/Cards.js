import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((cards, index) => (
        <div key={index} className="Cards">
          <h1>{Cards.title}</h1>
          <p>{Cards.despriction}</p>
          <Link to={`/Cards/${cards.title}`}>ViewMore</Link>
        </div>
      ))}
    </>
  );
};
export default Cards;
