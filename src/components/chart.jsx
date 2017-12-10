import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend  } from 'recharts';
import {arrayOf, number, shape} from 'prop-types';

const average = data =>
    (data.reduce((sum, cur) => sum + cur, 0)/data.length).toFixed(2);

const Chart = ({data}) => (
    <div>
        <LineChart width={850} height={200} data={data}>
            <Line type="monotone" dataKey='temp' stroke="#FF0000"/>
            <Line type="monotone" dataKey='pressure' stroke="#00FF00"/>
            <Line type="monotone" dataKey='humidity' stroke="#0000FF"/>
            <Tooltip/>
            <Legend/>
            <XAxis dataKey="date" />
        </LineChart>
        <div>{String.fromCharCode(176)}</div>
    </div>
);

Chart.propTypes = {
  data: arrayOf(shape({
      temp: number.isRequired,
      pressure: number.isRequired,
      humidity: number.isRequired
  })).isRequired
};

export default Chart;