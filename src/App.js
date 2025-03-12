import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Public from "./Views/User/Index";
import Private from "./Views/Index";
import Adminlogin from "./Views/Admin/Adminlogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/user/main" />} />
        <Route path="/user/*" element={<Public />} />
        <Route path="/admin/*" element={<Private />} />
        <Route path="/login" element={<Adminlogin />} />
      </Routes>
    </>
  );
}

export default App;
