import React from 'react';
import { LineChart, Line } from 'recharts';
import {arrayOf, string, number, shape} from 'prop-types';

const average = data =>
    (data.reduce((sum, cur) => sum + cur, 0)/data.length).toFixed(2);

const Chart = ({data,color, dataKey}) => (
    <div>
        <LineChart width={180} height={120} data={data}>
            <Line type="monotone" dataKey={dataKey} stroke={color}/>
            <Line type="monotone" dataKey={dataKey} stroke={color}/>
            <Line type="monotone" dataKey={dataKey} stroke={color}/>
        </LineChart>
        <div>{String.fromCharCode(176)}</div>
    </div>
);

Chart.propTypes = {
  data: arrayOf(shape({
      temp: number.isRequired,
      pressure: number.isRequired,
      humidity: number.isRequired
  })).isRequired,
    color: string.isRequired,
    dataKey:string.isRequired
};

export default Chart;