import React from "react";
import { useState } from "react";
import explorer from "./data/folderStructureData";
import Folder from "./Folder";
import "./folder.css";
import useTraversTree from "./hook/traverseTree";

function FolderStructureOne() {
  const [data, setData] = useState(explorer);
  const { insertNode } = useTraversTree();

  const handleInsertNode = (folderId, name, isFolder) => {
    const traversedTree = insertNode(data, folderId, name, isFolder);
    setData(traversedTree);
  };

  const handleRemoveNode = (folderId) => {
    console.log(folderId);
  };

  return (
    <>
      <Folder
        data={data}
        handleInsertNode={handleInsertNode}
        handleRemoveNode={handleRemoveNode}
      />
    </>
  );
}

export default FolderStructureOne;
