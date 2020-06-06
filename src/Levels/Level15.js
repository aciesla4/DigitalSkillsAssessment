import React from 'react';
import '../App.css';
import Level from '../util/Level';
import { Router } from 'react-router-dom';
import { history } from '../util/PasswordReset/_helpers';
import { App } from '../util/PasswordReset/app';
import { configureFakeBackend } from "../util/PasswordReset/_helpers";
import "../css/SignIn.css";

class Level15 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            academicMode: this.props.academicMode,
        }
    }

    handleFound = () => {
        console.log("handle found")
        this.setState({
            isJewelFound: true,
        })
    }

    handleCloseDialog = () => {
        this.setState({
            isJewelFound: false
        })
        this.props.getLevelChange()
    }

    render() {
        configureFakeBackend();
        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission=''
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage=''
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! <TODO> Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <Router history={history}>
                        <br/><br/><br/>
                        <App handleFound={this.handleFound}/>
                    </Router>
                </div>
            </Level>
        );
    }
}

export default Level15;