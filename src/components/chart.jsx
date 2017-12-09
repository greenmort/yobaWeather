import React from 'react';
import {arrayOf, string, number} from 'prop-types';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const Chart = ({data, color}) => (
    <Sparklines height={120} width={180} data = {data}>
        <SparklinesLine color = {color} />
    </Sparklines>
);

Chart.propTypes = {
  data: arrayOf(number).isRequired,
  color: string.isRequired
};

export default Chart;