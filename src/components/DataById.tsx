import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DataById.css';
import { Logement } from '../types/Logement'
import { Carrousel } from './Carrousel';
import { Collapse } from './Collapse';
import { ErrorPage } from './ErrorPage';
import { Rating } from './Rating';
import { Tags } from './Tags';

export function DataById() {

    const [data, setData] = useState<Logement[]>([]);
    const param = useParams()
    const idURL = param.id

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

    const logement = data.find((elt) => elt.id == idURL);

    if (logement == undefined) {
        return <ErrorPage />
    }

    // console.log(logement.equipments)
    
    const equipments = logement.equipments

    return (
        <div className='data-content'>
            <Carrousel logement={logement}/>
            <div className='first-part'>
                <div className='title-part'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className='tags-part'>
                        <Tags logement={logement}/>
                    </div>
                </div>
                <div className='author-part'>
                    <div className='author'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className='rate-part'>
                        <Rating logement={logement}/>
                    </div>
                </div>
            </div>
            <div className='second-part'>
                <div className='description-part'>
                    <Collapse title="Description" content={logement.description} />
                </div>
                <div className='equipements-part'>
                    <Collapse title="Équipements" content={equipments} />
                </div>
            </div>
        </div>
    );
}
