import React from 'react';
import SpyLogo from './spyLogo.jpg';
import $ from 'jquery';
import "../css/Welcome.css";
import axios from "axios";

class Final extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0
        }
    }

    componentDidMount() {
        $(document).ready(function () {
            $("#congrats").hide().delay(3000).fadeIn(100);
            $('#score').hide().delay(5000).fadeIn(100);
            $('#learn').hide().delay(5005).fadeIn(100);
        });
        axios.get('http://localhost:8080/logging')
            .then((response) => {
                this.setState({
                    score: response.data
                })
            });
    }

    render() {
        return (
            <div className="welcome">
                <h1 align="center">Congratulations Agent!</h1>
                <img className="app-logo" src={SpyLogo} alt="logo"/><br/>
                <p id="congrats" className="congrats-text">You have successfully completed your missions!</p>
                <p id="score" className="score-text">Your Digital Skill Level is: {this.state.score}</p>
                <button id="learn" className="learn-btn" onClick={event =>  window.open('http://google.com','_blank')}>Click Here to Learn More About Your Score</button>
            </div>
        );
    }
}

export default Final;