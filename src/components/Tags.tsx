import React from 'react';
import '../styles/Tags.css';
import { LogementProps } from '../types/LogementProps';

export function Tags({ logement } :LogementProps) {

    const tags = logement.tags

    return (
        <>
            {tags.map((tag, index) => {
                return (
                    <div key={index} className="tags">
                        <p>{tag}</p>
                    </div>
                )
            })}
        </>
    );
}

