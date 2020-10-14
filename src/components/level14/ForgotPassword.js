import React, { useState } from "react";
import "../../css/Level14.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";

// Component for the forgot password page in Level 14
export default function ForgotPassword(props) {
    // the initial values inputs in the form
  const initialValues = {
    email: "",
  };

  // schema used to validate the email entered by the user
    // see https://formik.org/docs/guides/validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
  });

  // local state for whether the reset link is shown and its value
  const [showResetLink, setShowResetLink] = useState(false);
  const [resetLink, setResetLink] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // handle submitting the form
  function onSubmit({ email }) {
    console.log(email);
    setSubmitting(true);
    // makes an HTTP request to the json server that handles the login logic to check if the email exists and receives the reset password link
    axios
      .post("https://digital-skills-json-server.herokuapp.com/passwordreset", {
        email: email,
      })
      .then((response) => {
        console.log(response);
        setShowResetLink(true);
        setResetLink(response.data);
      });
    setSubmitting(false);
  }

  // handles when the user clicks the reset link
  function handleClickReset() {
    console.log(resetLink);
    // makes an HTTP request to the json server that handles the login logic to check if the reset link is valid
    axios
      .get("https://digital-skills-json-server.herokuapp.com" + resetLink)
      .then((response) => {
        if (response.status === 200) {
          props.changeView("resetPassword");
        } else {
          console.log("error");
        }
      });
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <br />
            <h2 style={{ textAlign: "center" }}>Forgot Password</h2>
            <div className="card-body">
              <div className="form-group">
                <label>Email</label>
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
              <div>
                <div>
                  <button type="submit" disabled={submitting} className="submit-btn">
                      {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => props.changeView("forgotPassword")}
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
      {showResetLink && (
        <div className="reset-container">
          <button className="reset-btn" onClick={handleClickReset}>
            Reset Your Password Here
          </button>
        </div>
      )}
    </div>
  );
}

// defines the props the component expects
ForgotPassword.propTypes = {
    changeView: PropTypes.func,     // function that changes the view when the workflow on the view is done
}