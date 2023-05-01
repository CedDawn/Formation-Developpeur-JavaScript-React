import React, { useEffect, useState } from 'react';
import '../styles/Graphics.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import { ActivityCall } from '../services/ActivityService';
import GraphicsProptypes from '../proptypes/Graphics';
import createActivityModel from '../models/ActivityModel';

/**
 * Return a custom tooltip with the chosen informations
 * (A tooltip is the "hover informations")
 */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="poids">{payload[0].value}kg</p>
        <p className="kcal">{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

/**
 * Make a call to the API then return the activity graphic completed
 * @param {object} props - The content of the componant call parameters.
 */
function GraphicActivity(props) {
  const [data, setData] = useState([]);
  const userId = JSON.stringify(props.id)
    
  useEffect(() => {
    ActivityCall(userId)
      .then((data) => {
          setData(createActivityModel(data))
      })
  })

  GraphicActivity.propTypes = GraphicsProptypes;

  return (
      <>
        <div className='activitygraphic-container'>
          <h2>Activité quotidienne</h2>
          <ResponsiveContainer width="92%" height="95%">
            <BarChart barGap={8} data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis tickLine={false} tickFormatter={value => value+1} axisLine={{ stroke: "#DEDEDE" }} tick={{ fontSize: 14, dy: 10, fill: "#9B9EAC" }} />
              <YAxis tickLine={false} tickCount={3} orientation="right" axisLine={false} tick={{ fontSize: 14, dx: 15, fill: "#9B9EAC" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend align='right' verticalAlign='top'iconType='circle' iconSize={8} height={65} margin={{right: "100px"}} wrapperStyle={{fontSize: "14px", color: "#74798C"}} />
              <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
              <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
  );

    
}

export default GraphicActivity;