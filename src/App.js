import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Components/Nav'; // Nav
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards';
import About from './Components/About';
import Detail from './Components/Detail';
import Error from './Components/Error';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const filteredCharacters = characters.filter((character) => character.id !== parseInt(id, 10));
    setCharacters(filteredCharacters);
  };

  const onSearch = async (id) => {
    const isCharacterExist = characters.some((character) => character.id === parseInt(id, 10));

    if (isCharacterExist) {
      window.alert('este personaje ya esta en la lista');
    } else {
      try {
        const response = await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-tuusuario`);
        const data = response.data;

        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese id');
        }
      } catch (error) {
        console.error('Error fetching personaje:', error);
      }
    }
  };

  const addRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId.toString());
  };

  return (
    <div>
      <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* Ruta adicional para Error */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;



