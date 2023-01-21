import React, { useState } from "react";

function Folder({ data, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [isInput, setIsInput] = useState({
    visible: false,
    isFolder: null,
  });

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
            <span
              onClick={(e) => handleFolderClick(e)}
              onContextMenu={(e) => handleFolderClick(e)}
            >
              📁{data.name}
            </span>
            <span className="cus_span">
              <button onClick={() => handleInputClick(true)}>folder +</button>
            </span>
            <span>
              <button onClick={() => handleInputClick(false)}>file +</button>
            </span>
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
              <Folder data={item} handleInsertNode={handleInsertNode} />
            ))}
          </div>
        </div>
      )}
      {!data.isFolder && (
        <div>
          <span>📄{data.name}</span>
        </div>
      )}
    </div>
  );
}

export default Folder;
