import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import "../Assests/Form.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { notification } from "antd";

function Adminform({ editValues, id }) {
  const navigate = useNavigate();

  const apiUrl = "http://127.0.0.1:8000/users";
  const initialvalues = {
    email: "",
    password: "",
    name: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Enter a password")
      .min(6, "Password must be 6 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[a-z]/, "Password requires an lowercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    name: Yup.string().required("Name is Required"),
  });

  const handleSubmit = async (values) => {
    if (!editValues) {
      try {
        const response = await axios.post(apiUrl, values);
        if (response?.status === 200) {
          notification.success({
            duration: 5,
            message: response.data,
          });

          navigate(-1);
        }
      } catch (error) {
        if (
          error?.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          notification.error({
            duration: 5,
            message: `Error: ${error.response.data.detail}`,
          });
        } else {
          console.log("Other error:", error);
        }
      }
    } else {
      try {
        const response = await axios
          .put(`http://127.0.0.1:8000/users/${id}`, {
            password: values.password,
          })
          .then((response) => {
            if (response?.status === 200) {
              notification.success({
                duration: 5,
                message: "Admin Password Updated Successfully",
              });
              navigate(-1);
            }
          });
      } catch (error) {
        if (
          error?.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          notification.error({
            duration: 5,
            message: `Error: ${error.response.data.detail}`,
          });
        } else {
          console.log("error", error);
        }
      }
    }
  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <form>
          <span style={{ fontSize: "25px" }}>
            {editValues ? `Hello ${editValues.name}!` : "Hello Friend!"}
          </span>
          {/* Name */}
          <div className="forminput">
            <label>
              Name<label className="tick">*</label>
            </label>

            <Field
              type="text"
              name="name"
              placeholder="Enter Admin Name"
              autoComplete="off"
              value={editValues ? editValues.name : formik.values.name || ""}
              disabled={editValues ? true : false}
            />
            <div className="error-text">
              <ErrorMessage name="name" />
            </div>
          </div>
          {/* Email */}
          <div className="forminput">
            <label>
              Email<label className="tick">*</label>
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email-id"
              autoComplete="off"
              value={editValues ? editValues.email : formik.values.email || ""}
              disabled={editValues ? true : false}
            />
            <div className="error-text">
              <ErrorMessage name="email" />
            </div>
          </div>
          {/* Password */}
          <div className="forminput">
            <label>
              Password<label className="tick">*</label>
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              autoComplete="off"
              value={formik.values.password || ""}
            />

            <div className="error-text">
              <ErrorMessage name="password" />
            </div>
            {console.log("errors", formik.errors)}
            {console.log("values", formik.values)}
          </div>
          <div className="formbutton">
            <button
              type="button"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              {editValues ? "Update" : "Add"}
            </button>
            <button
              type="button"
              className="boxes"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            {!editValues ? (
              <button
                type="button"
                className="boxes"
                onClick={() => {
                  formik.resetForm();
                }}
              >
                Reset
              </button>
            ) : (
              ""
            )}
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Adminform;
