import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '../_services';

function Login({ history, location }) {
    const initialValues = {
        username: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Username is invalid')
            .required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    function onSubmit({ username, password }, { setSubmitting }) {
        alertService.clear();
        accountService.login(username, password)
            .then(() => {
                const { from } = location.state || { from: { pathname: "/" } };
                history.push(from);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h2 style={{ textAlign: 'center' }}>Login</h2>
                    <div className="">
                        <div className="form-group">
                            <label>Username</label>
                            <Field name="email" type="text" className="form-control" />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="signin-btn">
                                    Login
                                </button>
                            </div>
                            <div>
                                <Link to="forgot-password" className="">Forgot Password?</Link>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export { Login };