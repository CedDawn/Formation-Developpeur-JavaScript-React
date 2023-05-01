import React from 'react';
import '../styles/ErrorPage.css';

/**
 * The content of the ErrorPage, which shows up when the URL is wrong or the API is offline
 */
export function ErrorPage() {
    return (
        <div className='errorpage'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
            <a href='/'>Retourner sur la page d&apos;accueil</a>
        </div>
    );
}