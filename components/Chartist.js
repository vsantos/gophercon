import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: '.Get', istiops: 0.3, jenkins: 2.3,
  },
  {
    name: '.Clear', istiops: 0.3, jenkins: 2.7,
  },
  {
    name: '.Update', istiops: 0.4, jenkins: 3.2,
  },
];

export default class ComparisonChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer>
        <div style={{ float: 'left', width: '100%', height: '100%', fontSize: '4vh', marginTop: '5vh', marginBottom: '5vh' }}>

        <BarChart
          data={data}
          width={800}
          height={400}
          margin={{ top: 20, right: 30, left: 5, bottom: 5 }}
        >
          <CartesianGrid stroke="#ababab" strokeDasharray="3 7" />
          <XAxis dataKey="name" />
          <YAxis dataKey="jenkins">
            <Label
              value="time (s)"
              color="#fff"
              position="insideLeft"
              angle={-90}
              style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(255, 255, 255, 0.87)' }}
            />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="jenkins" stackId="b" fill="#008989" />
          <Bar dataKey="istiops" stackId="a" fill="#00b259" />
        </BarChart>
        </div>
      </ResponsiveContainer>
    );
  }
}
