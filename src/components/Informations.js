import React, { useEffect, useState } from 'react';
import '../styles/Graphics.css';
import calIcon from '../assets/right-icon1.svg'
import proIcon from '../assets/right-icon2.svg'
import gluIcon from '../assets/right-icon3.svg'
import lipIcon from '../assets/right-icon4.svg'
import { UserCall } from '../services/UserService';
import InformationsProptypes from '../proptypes/Informations';
import createInformationsModel from '../models/InformationsModel';

/**
 * Make a call to the API then return the informations on the right part (reusable componant)
 * @param {object} props - The content of the componant call parameters.
 */
function Information(props) {

    const [data, setData] = useState([]);
    const userId = JSON.stringify(props.id)
    const whichOne = props.info
    let icon
    let quantity
    let unite = "g"
        
    useEffect(() => {
        UserCall(userId)
            .then((data) => {
                setData(createInformationsModel(data))
            })
    })

    Information.propTypes = InformationsProptypes;
    
    if (whichOne === "Calories") {
        icon = calIcon
        quantity = data.calories
        unite = "kCal"
    } else if (whichOne === "Proteines") {
        icon = proIcon
        quantity = data.proteins
    } else if (whichOne === "Glucides") {
        icon = gluIcon
        quantity = data.glucids
    } else if (whichOne === "Lipides") {
        icon = lipIcon
        quantity = data.lipids
    } else {
        return ""
    }

    return (
            <>
                <div className='information-container'>
                    <img src={icon} alt={"icone des " + whichOne}/>
                    <div>
                        <h3>{quantity}{unite}</h3>
                        <p>{whichOne}</p>
                    </div>
                </div>
            </>
    );
}

export default Information;