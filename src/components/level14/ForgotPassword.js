import React, { useState } from "react";
import "../../css/Level14.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function ForgotPassword(props) {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
  });

  const [showResetLink, setShowResetLink] = useState(false);
  const [resetLink, setResetLink] = useState("");

  function onSubmit({ email }) {
    console.log(email);
    axios
      .post("https://digital-skills-json-server.herokuapp.com/passwordreset", {
        email: email,
      })
      .then((response) => {
        console.log(response);
        setShowResetLink(true);
        setResetLink(response.data);
      });
  }

  function handleClickReset() {
    console.log(resetLink);
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
                  <button type="submit" className="submit-btn">
                    Submit
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
