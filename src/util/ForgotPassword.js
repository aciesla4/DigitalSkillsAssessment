import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/Level15.css";
import axios from "axios";

const initialValues = {
    email: ''
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required')
});

class ForgotPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            showResetLink: false,
            resetLink: '',
        }
    }

    onSubmit = ({ email }) => {
        axios.post('http://localhost:5050/passwordreset', {email: email})
            .then((response) => {
                this.setState({
                    showResetLink: true,
                    resetLink: response.data
                })
            });
        this.setState({
            success: true,
        })
    }

    handleClickReset = () => {
        axios.get('http://localhost:5050' + this.state.resetLink).then(response => {
            if (response.status == 200) {
                this.props.changeView("resetPassword")
            }
            else {
                console.log("error")
            }
        })

    }

    render() {
        return (
            <div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onSubmit}>
                    {({errors, touched}) => (
                        <Form>
                            <br/>
                            <h2 style={{textAlign: 'center'}}>Forgot Password</h2>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Email</label>
                                    <Field name="email" type="text"
                                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                                </div>
                                <div>
                                    <div>
                                        <button type="submit" className="submit-btn">
                                            Submit
                                        </button>
                                    </div>
                                    <div>
                                        <a href='javascript:void(0)' onClick={() => this.props.changeView('forgotPassword')}>Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                {this.state.showResetLink && (
                    <div className="reset-container">
                        <button className="reset-btn" onClick={this.handleClickReset}>Reset Your Password Here</button>
                    </div>
                )}
            </div>
        )
    }
}

export default ForgotPassword;