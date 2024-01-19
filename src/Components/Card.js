import React from 'react';
import { Link } from 'react-router-dom'; 

const Card = ({ character, onClose }) => {
  const { id, name, status, species, gender, origin, image } = character;

  return (
    <div>
      <img src={image} alt={name} />
      {/* Enlazar */}
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin.name}</p>
      <button onClick={() => onClose(id.toString())}>Close</button>
    </div>
  );
};

export default Card;
