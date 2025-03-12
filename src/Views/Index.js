import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../Components/Sidebar";
import AddAdmin from "./Admin/AddAdmin";
import "../Assests/Common.css";
import EditAdmin from "./Admin/EditAdmin";
import AdminTable from "./Admin/Admin";
import Problem from "./Problem/Problem";
import Problems from "./Problem";
import PathProblem from "./Problem/PathPro";

function Private() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  return (
    <div>
      <Sidebar menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse} />

      <div style={{ marginLeft: menuCollapse ? "5%" : "14%" }}>
        <Routes>
          <Route path="homepage" element={<AdminTable />} />
          <Route path="problem" element={<Problem />} />
          <Route path="pathproblem" element={<PathProblem />} />
          <Route path="problem/*" element={<Problems />} />
          <Route path="add" element={<AddAdmin />} />
          <Route path="edit/:id" element={<EditAdmin />} />
        </Routes>
      </div>
    </div>
  );
}

export default Private;
