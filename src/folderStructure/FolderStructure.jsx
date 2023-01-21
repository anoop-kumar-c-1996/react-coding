import React from "react";
import { useState } from "react";
import explorer from "./data/folderStructureData";
import Folder from "./Folder";
import "./folder.css";
import useTraversTree from "./hook/traverseTree";

function FolderStructure() {
  const [data, setData] = useState(explorer);
  const { insertNode } = useTraversTree();

  const handleInsertNode = (folderId, name, isFolder) => {
    console.log(folderId, name, isFolder);
    const traversedTree = insertNode(data, folderId, name, isFolder);
    setData(traversedTree);
  };

  return (
    <>
      <Folder data={data} handleInsertNode={handleInsertNode} />
    </>
  );
}

export default FolderStructure;
