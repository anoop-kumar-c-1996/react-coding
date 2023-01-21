import React from "react";
import { Dropdown, Menu } from "antd";

function ContextMenu() {
  const handleClick = (e) => {
    console.log(e);
  };
  const menu = (
    <Menu
      onClick={(e) => handleClick(e)}
      items={[
        {
          label: "📁 add folder",
          key: "addFolder",
        },
        {
          label: "📄 add file",
          key: "abces",
        },
      ]}
    ></Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu} trigger={["contextMenu"]}>
        <h1>Click Me</h1>
      </Dropdown>
    </div>
  );
}

export default ContextMenu;
