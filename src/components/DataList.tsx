import React, { useEffect, useState } from 'react';
import '../styles/DataList.css';
import { Logement } from '../types/Logement'

export function DataList() {

    const [data, setData] = useState<Logement[]>([]);

    useEffect(() => {
        fetch("logements.json")
            .then((data) => {
                return data.json()
            })
            .then((logements) => {
                setData(logements)
            })
        // console.log(data)
    }, [])

    return (
        <div className='gallery'>
            <div className='datalist'>
                {
                    data.map((logement) => 
                    <article key={logement.id}>
                        <a href={logement.id}>
                            <img src={logement.pictures[0]} alt="Aperçu du logement"/>
                            <div className='filter'>
                                <h1>{logement.title}</h1>
                            </div>
                        </a>
                    </article>
                    )
                }
            </div>
        </div>
    );
}
