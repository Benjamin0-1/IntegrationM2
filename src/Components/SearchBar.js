// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // Paso 1: Crear un estado local llamado id
  const [id, setId] = useState('');

  const handleSearch = () => {
    onSearch(id);
    setId(''); // Limpiar el estado id después de realizar la búsqueda
  };

  // Paso 2: Crear una función handleChange para actualizar el estado id
  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      {/* Paso 3: Pasar handleChange al input y asignarle el estado id como su value */}
      <input
        type="text"
        placeholder="Enter character ID..."
        value={id}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Add Character</button>
    </div>
  );
};

export default SearchBar;
