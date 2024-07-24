import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Link to="/login" className="login-button">ENTRAR</Link>
    </header>
  );
};

export default Header;