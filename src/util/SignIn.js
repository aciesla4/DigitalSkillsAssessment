import React from 'react';
import { TextField, Link, Container } from "@material-ui/core";
import "../css/SignIn.css";

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = () => {

    }

    render () {
        return (
            <Container component="main" maxWidth="xs">
                <div className="login">
                    <h2>Training Sign In</h2>
                    <form className="login-form" noValidate>
                        <TextField variant="outlined" color="secondary" margin="normal" required fullWidth label="Username" onChange={this.handleUsername}/>
                        <TextField variant="outlined" color="secondary" margin="normal" required fullWidth label="Password" type="password" onChange={this.handlePassword}/>
                        <button type="submit" className="signin-btn" onClick={this.handleSubmit}>SIGN IN</button>
                        <Link href="#" variant="body2">Forgot password?</Link>
                    </form>
                </div>
            </Container>
        );
    }

}

export default SignIn;