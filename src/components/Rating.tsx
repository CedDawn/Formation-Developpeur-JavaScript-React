import React from 'react';
import '../styles/Tags.css';
import { LogementProps } from '../types/LogementProps';
import fullStar from '../assets/fullStar.svg';
import emptyStar from '../assets/emptyStar.svg';


export function Rating({ logement } :LogementProps) {

    const nbOfStars = logement.rating;

    return (
        <>
            <img src={nbOfStars >= "1" ? fullStar : emptyStar} />
            <img src={nbOfStars >= "2" ? fullStar : emptyStar} />
            <img src={nbOfStars >= "3" ? fullStar : emptyStar} />
            <img src={nbOfStars >= "4" ? fullStar : emptyStar} />
            <img src={nbOfStars == "5" ? fullStar : emptyStar} />
        </>
    );
}