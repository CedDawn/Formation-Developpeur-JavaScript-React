import React, { useEffect, useState } from 'react';
import '../styles/Graphics.css';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { PerformanceCall } from '../services/PerformanceService';
import GraphicsProptypes from '../proptypes/Graphics';
import createPerformanceModel from '../models/Performance';

/**
 * Make a call to the API then return the stats graphic completed
 * @param {object} props - The content of the componant call parameters.
 */
function GraphicStats(props) {

    const [data, setData] = useState([]);
    const userId = JSON.stringify(props.id)
        
    useEffect(() => {
        PerformanceCall(userId)
            .then((data) => {
                setData(createPerformanceModel(data))
            })
    })

    GraphicStats.propTypes = GraphicsProptypes;

    let performanceArray = [...data]

    return (
            <>
                <div className='statsgraphic-container'>
                    <ResponsiveContainer width="100%" height="80%">
                        <RadarChart width={260} height={240} data={performanceArray.reverse()}>
                            <PolarGrid gridType="polygon" radialLines={false} />
                            <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: "white", margin: 20 }} angleOffset={20}/>
                            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </>
    );
}

export default GraphicStats;