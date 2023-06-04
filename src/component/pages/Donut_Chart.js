import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AreaChartComponent = () => {
  const data = [
    { name: 'Label 1', data: 4 },
    { name: 'Label 2', data: 2 },
    { name: 'Label 3', data: 3 },
    { name: 'Label 4', data: 3 },
    { name: 'Label 5', data: 2 },
    { name: 'Label 6', data: 1 },
  ];

  return (
    <AreaChart width={320} height={200} data={data} className='b-c-t'>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
  
      <Area type="monotone" dataKey="data" stroke="#8884d8" fill="#492f4d" />
    </AreaChart>
  );
};

export default AreaChartComponent;
