/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Container } from './styles';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev);
  };

  return (
    <Container>
      <div className="logo">
        <img src="https://i.postimg.cc/8z3vRf0b/logo.png" alt="logo" />
        <h1>fastfood</h1>
      </div>
      <nav className="navBar">
        <button onClick={handleToggle}>{navbarOpen ? 'X' : 'MENU'}</button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'ativo' : undefined)}
            >
              Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cozinha"
              className={({ isActive }) => (isActive ? 'ativo' : undefined)}
            >
              Cozinha
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/retirada"
              className={({ isActive }) => (isActive ? 'ativo' : undefined)}
            >
              Retirada
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
