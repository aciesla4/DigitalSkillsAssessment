import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/Level15.css";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const initialValues = {
    password: '',
    confirmPassword: ''
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false
        }
    }

    handleClose = () => {
        this.setState({
            success: false
        })
        this.props.changeView('resetToLogin')
    }

    onSubmit = ({ password, confirmPassword }) => {
        axios.post('http://localhost:5050/user',
            { id: 1, email: 'agent203@spyacademy.org', password: password})
            .then((response) => {
                if (response.status == 201) {
                    this.setState({
                        success: true,
                    })
                }
            });
    }

    render() {
        return (
            <div>
                <Snackbar open={this.state.success} autoHideDuration={4000}
                          anchorOrigin={{vertical: 'top', horizontal: 'right'}} style={{top: '100px'}}
                          onClose={this.handleClose}>
                    <MuiAlert elevation={6} variant="filled" severity="success">Password Reset Successful! Redirecting to Login Page...</MuiAlert>
                </Snackbar>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onSubmit}>
                    {({errors, touched}) => (
                        <Form>
                            <br/>
                            <h2 style={{ textAlign: 'center' }}>Reset Password</h2>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field name="password" type="password"
                                           className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <Field name="confirmPassword" type="password"
                                           className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <button type="submit"  className="submit-btn">
                                            Reset Password
                                        </button>
                                        <a href='javascript:void(0)' onClick={() => this.props.changeView('resetToLogin')}>Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default ResetPassword;