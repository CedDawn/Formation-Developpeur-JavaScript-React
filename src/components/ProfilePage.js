import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GraphicActivity from "./GraphicActivity";
import { ErrorPage } from './ErrorPage';
import '../styles/ProfilePage.css';
import GraphicDuration from './GraphicDuration';
import GraphicStats from './GraphicStats';
import Information from './Informations';
import GraphicScore from './GraphicScore';
import { UserCall } from '../services/UserService';
import createUserModel from '../models/UserModel';

/**
 * Return all the page by making a call and using different componants to have all the elements
 */
function ProfilePage() {

    const [data, setData] = useState([]);
    const param = useParams();
    const idURL = param.id;
    
    useEffect(() => {
        UserCall(idURL)
            .then((data) => {
                setData(createUserModel(data))
            })
    })

    const user = data.user
    
    if (user === undefined) {
        return <ErrorPage />
    }

    return (
        <div className='sportsee-profilepage'>
            <div className='profil-title'>
                <h1>Bonjour <span>{user.firstName}</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='graphics'>
                <div className='graphics-container'>   
                    <GraphicActivity id={user.id} />
                    <div className='littlegraphics-container'>
                        <GraphicDuration id={user.id} />
                        <GraphicStats id={user.id} />
                        <GraphicScore id={user.id} />
                    </div>
                </div>
                <div className='infos-container'>
                    <Information id={user.id} info={"Calories"} />
                    <Information id={user.id} info={"Proteines"} />
                    <Information id={user.id} info={"Glucides"} />
                    <Information id={user.id} info={"Lipides"} />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
