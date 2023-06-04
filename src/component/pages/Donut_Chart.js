import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AreaChartComponent = () => {
  const data = [
    { name: 'Jan', data: 40000 },
    { name: 'Feb', data: 20000 },
    { name: 'Mar', data: 30000 },
    { name: 'Apr', data: 30000 },
    { name: 'May', data: 20000 },
    { name: 'Jun', data: 10000 },
  ];

  return (
    <AreaChart width={350} height={200} data={data} className='b-c-t' >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
  
      <Area type="monotone" dataKey="data" stroke="#8884d8" fill="#492f4d" />
    </AreaChart>
  );
};

export default AreaChartComponent;
