import React from 'react';
import SpyLogo from './spyLogo.jpg';
import $ from 'jquery';

class Welcome extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $("#begin").hide().delay(3000).fadeIn(100);
        });
    }

    render() {
        return (
            <div className="welcome">
                <h1 align="center">Hello Agent</h1>
                <img className="app-logo" src={SpyLogo} alt="logo"/><br/>
                <button id="begin" className="begin-button" onClick={event =>  window.location.href='/home'}>Click Here to Begin</button>
            </div>
        );
    }
}

export default Welcome;