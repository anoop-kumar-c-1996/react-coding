import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FolderStructure from "./folderStructure/FolderStructure";
import FolderStructureOne from "./folderStructure _contextmenu/FolderStructure";
// import ContextMenu from "./folderStructure _contextmenu/ContextMenu";
import Maincomponent from "./memo&callback/Maincomponent";
import Api_DashBoard from "./api_example/Api_DashBoard";
import Api_Login from "./api_example/Api_Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FolderStructure />} />
        <Route path="/context_menu" element={<FolderStructureOne />} />
        {/* <Route path="/antd" element={<ContextMenu />} /> */}
        <Route path="/mem_call" element={<Maincomponent />} />
        <Route path="/api_login" element={<Api_Login />} />
        <Route path="/api_dashboard" element={<Api_DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
