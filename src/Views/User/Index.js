import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import NavbarTop from "../../Components/Navbar";
import PathWay from "./Pathway";
import Home from "./Home";

function Public() {
  return (
    <div>
      <NavbarTop />
      <Routes>
        <Route path="home" element={<User />} />
        <Route path="pathway" element={<PathWay />} />
        <Route path="main" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Public;
