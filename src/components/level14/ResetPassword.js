import React, { useState } from "react";
import "../../css/Level14.css";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function ResetPassword(props) {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const [success, setSuccess] = useState(false);

  function handleClose() {
    setSuccess(false);
    props.changeView("resetToLogin");
  }

  function onSubmit({ password, confirmPassword }) {
    axios
      .post("https://digital-skills-json-server.herokuapp.com/user", {
        id: 1,
        email: "agent203@spyacademy.org",
        password: password,
      })
      .then((response) => {
        if (response.status === 201) {
          setSuccess(true);
        }
      });
  }

  return (
    <div>
      <Snackbar
        open={success}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ top: "100px" }}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          Password Reset Successful! Redirecting to Login Page...
        </MuiAlert>
      </Snackbar>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <br />
            <h2 style={{ textAlign: "center" }}>Reset Password</h2>
            <div className="card-body">
              <div className="form-group">
                <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <button type="submit" className="submit-btn">
                    Reset Password
                  </button>
                  <button
                    onClick={() => props.changeView("resetToLogin")}
                    className="link-btn"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
