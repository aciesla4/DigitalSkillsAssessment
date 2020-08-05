import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/Level15.css";

function ForgotPassword(props) {
    const initialValues = {
        email: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required')
    });

    function onSubmit({ email }, { setSubmitting }) {
        // alertService.clear();
        // accountService.forgotPassword(email)
        //     .then(() => alertService.success('Please check your email for password reset instructions'))
        //     .catch(error => alertService.error(error))
        //     .finally(() => setSubmitting(false));
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <br/>
                    <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div>
                            <div>
                                <button type="submit" className="signin-btn">
                                    Submit
                                </button>
                            </div>
                            <div>
                                <a href='javascript:void(0)' onClick={props.changeView}>Cancel</a>
                            </div>
                        </div>

                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ForgotPassword;