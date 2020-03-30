import React from 'react';
import SpyLogo from './spyLogo.jpg';
import {Link as RouterLink} from "react-router-dom";
import { Button } from '@material-ui/core';

class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="welcome">
                <h1 align="center">Hello Agent</h1>
                <img className="app-logo" src={SpyLogo} alt="logo"/>
                <Button component={RouterLink} to="/home">Click Here to Begin</Button>
            </div>
        );
    }
}

export default Welcome;