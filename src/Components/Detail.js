import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  // Obtener el ID del personaje de los parámetros de la URL
  const { id } = useParams();

  // Estado local para almacenar la información del personaje
  const [character, setCharacter] = useState({});

  // Utilizar useEffect para realizar la solicitud a la API cuando el componente se monta
  useEffect(() => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });

    // Retornar una función para limpiar la información del personaje cuando el componente se desmonta
    return () => setCharacter({}); // haciendo el unmount
  }, [id]);

  return (
    <div>
      <h2>Detail Page</h2>

      {character.name && <p>Name: {character.name}</p>}
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Species: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && <p>Origin: {character.origin.name}</p>}
      {character.image && <img src={character.image} alt={character.name} />}
    </div>
  );
};

export default Detail;
