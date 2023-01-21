import React, { useState } from "react";
import { Dropdown, Menu } from "antd";

function Folder({ data, handleInsertNode, handleRemoveNode }) {
  const [expand, setExpand] = useState(false);
  const [isInput, setIsInput] = useState({
    visible: false,
    isFolder: null,
  });
  /*********************** */
  const handleContextMenuClick = (key) => {
    if (key == "addFolder") {
      handleInputClick(true);
    } else if (key === "addFile") {
      handleInputClick(false);
    } else {
      handleRemoveNode(data.id);
    }
  };
  const menu = (
    <Menu
      onClick={({ key }) => handleContextMenuClick(key)}
      items={[
        {
          label: "📁 add folder",
          key: "addFolder",
        },
        {
          label: "📄 add file",
          key: "addFile",
        },
        {
          label: "❌ Remove Folder",
          key: "remove",
        },
      ]}
    ></Menu>
  );
  const menuOne = (
    <Menu
      onClick={({ key }) => handleContextMenuClick(key)}
      items={[
        {
          label: "❌ Remove file",
          key: "remove",
        },
      ]}
    ></Menu>
  );
  /********************** */
  const handleInputClick = (isFolder) => {
    setIsInput({
      visible: true,
      isFolder: isFolder,
    });
    setExpand(true);
  };

  const hanndleOnblur = () => {
    setIsInput({
      visible: false,
      isFolder: null,
    });
  };

  const addFileorFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(data.id, e.target.value, isInput.isFolder);
      setIsInput({
        visible: false,
        isFolder: null,
      });
    }
  };
  const handleFolderClick = (e) => {
    if (e.type === "click") setExpand(!expand);
    else {
      e.preventDefault();
      console.log("rightclick");
    }
  };
  return (
    <div>
      {data.isFolder && (
        <div>
          <div>
            <Dropdown overlay={menu} trigger={["contextMenu"]}>
              <span onClick={(e) => handleFolderClick(e)}>📁{data.name}</span>
              {/* <span className="cus_span">
              <button onClick={() => handleInputClick(true)}>folder +</button>
            </span>
            <span>
              <button onClick={() => handleInputClick(false)}>file +</button>
            </span> */}
            </Dropdown>
          </div>
          <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
            {isInput.visible && (
              <div>
                <span>{isInput.isFolder ? "📁" : "📄"}</span>
                <input
                  type={"text"}
                  autoFocus
                  onBlur={() => hanndleOnblur()}
                  onKeyDown={addFileorFolder}
                />
              </div>
            )}
            {data.items.map((item) => (
              <Folder
                data={item}
                handleInsertNode={handleInsertNode}
                handleRemoveNode={handleRemoveNode}
              />
            ))}
          </div>
        </div>
      )}
      {!data.isFolder && (
        <div>
          <Dropdown overlay={menuOne} trigger={["contextMenu"]}>
            <span>📄{data.name}</span>
          </Dropdown>
        </div>
      )}
    </div>
  );
}

export default Folder;
