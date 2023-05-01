import React from 'react';
import '../styles/Banner.css';
import BannerBackground from '../assets/banner.png'

export function Banner() {
  return (
    <div className='kasa-banner'>
        <img src={BannerBackground} alt="Bannière"/>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

