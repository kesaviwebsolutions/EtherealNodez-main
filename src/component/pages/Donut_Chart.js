import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AreaChartComponent = () => {
  const data = [
    { name: "Jan", data: 20000 },
    { name: "Feb", data: 20000 },
    { name: "Mar", data: 30000 },
    { name: "Apr", data: 10000 },
    { name: "May", data: 40000 },
    { name: "Jun", data: 30000 },
  ];

  return (
    <div>
      <div className="m-q-b-d-n">
        <AreaChart width={350} height={200} data={data} className="b-c-t">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="data"
            stroke="#8884d8"
            fill="#492f4d"
          />
        </AreaChart>
      </div>
      <div className="m-q-a-d-n">
        <AreaChart width={160} height={130} data={data} className="b-c-t">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="data"
            stroke="#8884d8"
            fill="#492f4d"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default AreaChartComponent;
