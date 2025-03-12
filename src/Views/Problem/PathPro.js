import React from "react";
import Allproblem from "./Allproblem";
import Pathproblem from "./PathProblems";

function PathProblem() {
  return (
    <>
      <head>
        <title>Problem</title>
      </head>
      <div className="admincontainer">
        <h1>FootPath Problems</h1>
        <Pathproblem />
      </div>
    </>
  );
}

export default PathProblem;
