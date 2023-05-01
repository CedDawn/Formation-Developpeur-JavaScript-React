import React, { useEffect, useState } from 'react';
import '../styles/Graphics.css';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { UserCall } from '../services/UserService';
import GraphicsProptypes from '../proptypes/Graphics';
import createScoreModel from '../models/ScoreModel';

/**
 * Make a call to the API then return the score graphic completed
 * @param {object} props - The content of the componant call parameters.
 */
function GraphicScore(props) {

    const [data, setData] = useState([]);
    const userId = JSON.stringify(props.id)
        
    useEffect(() => {
        UserCall(userId)
            .then((data) => {
                setData(createScoreModel(data))
            })
    })

    GraphicScore.propTypes = GraphicsProptypes;

    const chartData = [data]

    return (
            <>
                <div className='scoregraphic-container'>
                    <h3>Score</h3>
                    <p><span>{data.score}%</span><br/>de votre objectif</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart width={258} height={263} innerRadius="65%" barSize={10} startAngle={90} endAngle={450} data={chartData}>
                            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                            <RadialBar dataKey="score" angleAxisId={0} fill="#FF0000" cornerRadius={5} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </>
    );
}

export default GraphicScore;