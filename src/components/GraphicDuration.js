import React, { useEffect, useState } from 'react';
import '../styles/Graphics.css';
import { XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import { SessionsCall } from '../services/SessionsService';
import GraphicsProptypes from '../proptypes/Graphics';
import createSessionsModel from '../models/SessionsModel';

/**
 * Return a custom tooltip with the chosen informations
 * (A tooltip is the "hover informations")
 */
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <>
        <div className="custom-tooltip">
          <p className="minutes">{payload[0].value} min</p>
        </div>
        </>
      );
    }
    return null;
};

/**
 * Make a call to the API then return the durations graphic completed
 * @param {object} props - The content of the componant call parameters.
 */
function GraphicDuration(props) {

    const [data, setData] = useState([]);
    const userId = JSON.stringify(props.id)
        
    useEffect(() => {
        SessionsCall(userId)
            .then((data) => {
                setData(createSessionsModel(data))
            })
    })

    GraphicDuration.propTypes = GraphicsProptypes;

    return (
            <>
                <div className='durationgraphic-container'>
                    <h2>Durée moyenne des sessions</h2>
                    <ResponsiveContainer width="95%" height="100%">
                        <LineChart width="92%" height="97%" data={data} >
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{textAnchor:"middle", fill:"#FFFFFF", opacity:"0.6", fontSize:"12px"}}/>
                            <YAxis hide={true} domain={[0,100]}/>
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="sessionLength" stroke="url(#gradient)" dot={{ stroke: 'none', fill: 'none' }} activeDot={{ r: 4, stroke:"rgba(255, 255, 255, 0.2)", strokeWidth: 9, fill: "white" }} isAnimationActive={false} />
                            <defs>
                                <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="0">
                                    <stop offset="0%" stopColor="white" />
                                    <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />  
                                </linearGradient>
                            </defs>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </>
    );
}

export default GraphicDuration;