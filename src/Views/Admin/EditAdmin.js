import React, { useEffect, useState } from "react";
import Adminform from "../../Components/Adminform";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditAdmin() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/admins/{admin_id}?user_id=${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        setData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <head>
        <title>Edit</title>
      </head>
      <div className="admincontainer">
        <i
          class="bi bi-arrow-left-square"
          style={{ fontSize: "40px", cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        ></i>
        <Adminform editValues={data} id={id} />
      </div>
    </>
  );
}

export default EditAdmin;
