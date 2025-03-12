import { Formik, ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../Assests/Form.css";
import adminlogin from "../../Assests/Images/admin_login.png";
import { notification } from "antd";

function Adminlogin() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const initialvalues = {
    email: "",
    password: "",
  };

  const validationschema = Yup.object().shape({
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
  });

  const handleLogin = async (values) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/login?username=${values.email}&password=${values.password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.email,
            password: values.password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      if (response?.status === 200) {
        navigate("/admin/homepage", { state: { record: values } });

        notification.success({
          duration: 3,
          message: "Login Successful",
        });
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <head>
        <title>Login</title>
      </head>
      <Formik
        initialValues={initialvalues}
        validationSchema={validationschema}
        onSubmit={handleLogin}
      >
        {(formik) => (
          <section className="vh-100" style={{ marginTop: "8%" }}>
            <div className="container-fluid h-custom ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <i
                    class="bi bi-arrow-left-square"
                    style={{ fontSize: "40px", cursor: "pointer" }}
                    onClick={() => {
                      navigate(-1);
                    }}
                  ></i>
                  <img
                    src={adminlogin}
                    className="img-fluid"
                    alt="Login"
                    height="80%"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <div
                    style={{
                      fontSize: "25px",
                      marginBottom: "30px",
                      textAlign: "center",
                    }}
                  >
                    Login
                  </div>
                  <form className="adminlogin">
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
                        value={formik.values.email || ""}
                      />
                      <div className="error-text">
                        <ErrorMessage name="email" />
                      </div>
                    </div>

                    <div className="forminput">
                      <label className="form-label">Password</label>
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
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        style={{
                          backgroundColor: "#ffe172",
                          border: "none",
                          color: "black",
                        }}
                        onClick={() => {
                          formik.handleSubmit();
                        }}
                      >
                        Login
                      </button>
                      {loginError && (
                        <div
                          className="error-text"
                          style={{ marginTop: "10px" }}
                        >
                          {loginError}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
}

export default Adminlogin;
