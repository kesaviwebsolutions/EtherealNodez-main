import { Tabs } from "antd";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

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
      <div>
      <div className="d-f a-i-c f-f-int m-b-2 c-p">
        <div className="m-l-0_5 f-f-int">1D</div>
        
        <div className="m-l-0_5 f-f-int">1W</div>
        <div className="high_light m-l-0_5 f-f-int">1M</div>
        <div className="m-l-0_5 f-f-int">1Y</div>
        <div className="m-l-0_5 f-f-int"><AiOutlineCalendar className="f-s-1_5 b-c-t" /></div>
      </div>
    </div>
    </div>
  );
}
