import { Tabs } from "antd";
import React from "react";

export default function Datetabs() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Day`,
     
    },
    {
      key: "2",
      label: `Week`,
    
    },
    {
      key: "3",
      label: `Month`,
    
    },
    {
      key: "4",
      label: `Year`,
      
    },
  ];
  return (
    <div>
      {" "}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}
