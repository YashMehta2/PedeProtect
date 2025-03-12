import React from "react";
import { Route, Routes } from "react-router-dom";
import ProperProblem from "./ProperProblem";
import Crackedproblem from "./CrackedProblem";
import BrokenProblem from "./BrokenProblem";

function Problems() {
  return (
    <>
      <Routes>
        <Route path="proper" element={<ProperProblem />} />
        <Route path="cracked" element={<Crackedproblem />} />
        <Route path="broken" element={<BrokenProblem />} />
      </Routes>
    </>
  );
}

export default Problems;
