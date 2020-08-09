import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/Level14.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

const initialValues = { email: '', password: ''};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string().required('Password is required')
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    handleClose = () => {
        this.setState({
            error: false
        })
    }

    onSubmit = ({ email, password }) => {
        axios.get('https://digital-skills-json-server.herokuapp.com/user')
            .then((response) => {
                if (email === response.data.email && password === response.data.password) {
                    this.props.changeView('showDone')
                }
                else {
                    this.setState({
                        error: true
                    })
                }
            });
    }

    render () {
        return (
            <div>
                <Snackbar open={this.state.error} autoHideDuration={5000}
                          anchorOrigin={{vertical: 'top', horizontal: 'right'}} style={{top: '100px'}}
                          onClose={this.handleClose}>
                    <MuiAlert elevation={6} variant="filled" severity="error">Incorrect Login Credentials</MuiAlert>
                </Snackbar>
                <br/>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onSubmit}>
                    {({errors, touched}) => (
                        <Form>
                            <h2 style={{textAlign: 'center'}}>Login</h2>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <Field name="email" type="text"
                                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <Field name="password" type="password"
                                           className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                                </div>
                                <div>
                                    <div>
                                        <button type="submit" className="submit-btn">
                                            Login
                                        </button>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.changeView('forgotPassword')} className="link-btn">Forgot Password?</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Login;