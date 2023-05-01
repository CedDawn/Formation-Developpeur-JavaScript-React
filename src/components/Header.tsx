import React from 'react';
import '../styles/Header.css';
import Logo from '../assets/originalLogo.svg'
import { NavList } from './NavList';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='kasa-header'>
      <Link to="/">
        <img src={Logo} alt="Logo du site Kasa"/>
      </Link>
      <NavList/>
    </header>
  );
}
