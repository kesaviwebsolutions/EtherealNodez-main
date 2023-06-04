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
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Week`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Month`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Year`,
      children: `Content of Tab Pane 4`,
    },
  ];
  return (
    <div>
      {" "}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}
