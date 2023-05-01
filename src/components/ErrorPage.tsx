import React from 'react';
import '../styles/ErrorPage.css';

export function ErrorPage() {
    return (
        <div className='errorpage'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
            <a href='/'>Retourner sur la page d&apos;accueil</a>
        </div>
    );
}
