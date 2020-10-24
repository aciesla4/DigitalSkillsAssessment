import React, { useState } from "react";
import "../../css/Level14.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";

// Component for the login page in Level 14
export default function Login(props) {
    // the initial values of the inputs in the form
  const initialValues = { email: "", password: "" };

  // schema for validating the email and password entered by the user
    // see https://formik.org/docs/guides/validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // local state that holds whether an error has occured and whether the form is being submitted
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // handles closing the snackbar that appears when the form is submitted
  function handleClose() {
    setError(false);
  }

  // handle submitting the form
  function onSubmit({ email, password }) {
    // makes an HTTP request to the json server that handles login logic to see if the user entered a valid username and password
    setSubmitting(true);
    let e = {
        currentTarget: {
            id: "Learned if the username and password was correct by clicking submit."
        }
    }
    props.logClick(e, 14);
    axios
      .get("https://digital-skills-json-server.herokuapp.com/user")
      .then((response) => {
        if (
          email === response.data.email &&
          password === response.data.password
        ) {
          props.changeView("showDone");
        } else {
          setError(true);
        }
        setSubmitting(false);
      });
  }

  return (
    <div>
      <Snackbar
        open={error}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ top: "100px" }}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity="error">
          Incorrect Login Credentials
        </MuiAlert>
      </Snackbar>
      <br />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <div className="card-body">
              <div className="form-group">
                <label className="form-label">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
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
              <div>
                <div>
                  <button type="submit" disabled={submitting} className="submit-btn">
                      {submitting ? "Logging In..." : "Login"}
                  </button>
                </div>
                <div>
                  <button
                    id="Navigated to the Forgot Password screen."
                    onClick={(e) => {
                        props.changeView("forgotPassword")
                        props.logClick(e, 14)
                    }}
                    className="link-btn"
                  >
                    Forgot Password?
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

// defines the props the component expects
Login.propTypes = {
    changeView: PropTypes.func,     // function that changes the view when the workflow on the view is done
}
