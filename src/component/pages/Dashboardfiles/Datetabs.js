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
      <div className="d-f a-i-c f-f-int m-b-2 c-p">
        <div className="m-l-0_5 f-f-int">Day</div>
        
        <div className="m-l-0_5 f-f-int">Week</div>
        <div className="high_light m-l-0_5 f-f-int">Month</div>
        <div className="m-l-0_5 f-f-int">Year</div>
        <div className="m-l-0_5 f-f-int"><AiOutlineCalendar className="f-s-1_5 b-c-t" /></div>
      </div>
    </div>
  );
}
