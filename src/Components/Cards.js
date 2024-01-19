// src/components/Cards.js
import React from 'react';
import Card from './Card';

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {characters.map((character) => (
        // Paso 5: Pasar el ID a Card
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
};

export default Cards;
