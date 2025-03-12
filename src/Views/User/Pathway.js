import React, { useState } from "react";
import PredictionForm from "./Form";

function PathWay() {
  const [pathway, setpathway] = useState("Pathway");
  return (
    <>
      <head>
        <title>{pathway}</title>
      </head>
      <div className="usercontainer">
        <PredictionForm name={pathway} />
      </div>
    </>
  );
}

export default PathWay;
