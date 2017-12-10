import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { arrayOf, number, shape } from 'prop-types';

const average = data => (data.reduce((sum, cur) => sum + cur, 0) / data.length).toFixed(2);

const Chart = ({ data }) => (
  <div>
    <LineChart width={850} height={200} data={data}>
      <Line type="monotone" dataKey="temp" name="temperature" stroke="#FF0000" yAxisId={0} />
      <Line type="monotone" dataKey="pressure" stroke="#00FF00" yAxisId={1} />
      <Line type="monotone" dataKey="humidity" stroke="#0000FF" yAxisId={2} />
      <Tooltip />
      <XAxis dataKey="date" />
      <YAxis
        yAxisId={0}
        dataKey="temp"
        domain={['auto', 'auto']}
        unit={`${String.fromCharCode(176)}C`}
        stroke="#FF0000"
      />
      <YAxis yAxisId={1} dataKey="pressure" domain={['dataMin-10', 'dataMax+10']} stroke="#00FF00" />
      <YAxis yAxisId={2} dataKey="humidity" stroke="#0000FF" />
      <Legend />
    </LineChart>
  </div>
);

Chart.propTypes = {
  data: arrayOf(
    shape({
      temp: number.isRequired,
      pressure: number.isRequired,
      humidity: number.isRequired
    })
  ).isRequired
};

export default Chart;
