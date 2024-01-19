import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Nav.css';  
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, addRandomCharacter }) => {
    return (
      <nav>
        <h2>Navigation</h2>
        <SearchBar onSearch={onSearch} />
        {/* Botón para agregar un personaje aleatorio */}
        <button onClick={addRandomCharacter}>Add Random Character</button>
        {/* Botones de navegación */}
        <NavLink to="/about" activeClassName="active-link">
          <button>About</button>
        </NavLink>
        <NavLink to="/home" activeClassName="active-link">
          <button>Home</button>
        </NavLink>
      </nav>
    );
  };
  
  export default Nav;


