import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FolderStructure from "./folderStructure/FolderStructure";
import FolderStructureOne from "./folderStructure _contextmenu/FolderStructure";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FolderStructure />} />
        <Route path="/context_menu" element={<FolderStructureOne />} />
      </Routes>
    </Router>
  );
}

export default App;
