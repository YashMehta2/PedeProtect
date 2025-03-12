import React from "react";
import { useNavigate } from "react-router-dom";
import adminregistration from "../../Assests/Images/adminlogin.png";
import Adminform from "../../Components/Adminform";

function AddAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <head>
        <title>Add</title>
      </head>
      <div className="admincontainer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Add Admin</h1>
          <i
            class="bi bi-arrow-left-square"
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={() => {
              navigate(-1);
            }}
          ></i>
        </div>
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-sm-6">
            <img
              src={adminregistration}
              alt="adminregistration"
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-sm-6" style={{ alignSelf: "center" }}>
            <Adminform />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAdmin;
