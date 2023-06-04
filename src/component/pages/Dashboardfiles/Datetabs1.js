import { Tabs } from "antd";
import React from "react";

export default function Datetabs() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `1D`,
     
    },
    {
      key: "2",
      label: `1W`,
    
    },
    {
      key: "3",
      label: `1M`,
    
    },
    {
      key: "4",
      label: `1Y`,
      
    },
  ];
  return (
    <div>
      {" "}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}
