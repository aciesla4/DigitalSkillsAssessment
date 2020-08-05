import React from 'react';
import '../css/Level5.css';
import Level from '../util/Level';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { App } from '../util/PasswordReset/app';
import { configureFakeBackend } from "../util/PasswordReset/_helpers";
import "../css/SignIn.css";
import { accountService} from "../util/PasswordReset/_services";


import Login from "../util/Login";
import axios from "axios";
import ForgotPassword from "../util/ForgotPassword";

class Level15 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            academicMode: this.props.academicMode,
            showForgotPassword: false,
        }
    }

    handleFound = () => {
        this.setState({
            isJewelFound: true,
        })
    }

    handleCloseDialog = () => {
        this.setState({
            isJewelFound: false
        })
        accountService.logout();
        localStorage.clear();
        this.props.getLevelChange()
    }

    changeView = () => {
        console.log('change view')
        this.setState({
            showForgotPassword: !this.state.showForgotPassword,
        })
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
                    {this.state.showForgotPassword ? <ForgotPassword changeView={this.changeView}/> :
                    <Login error={this.state.error} handleClose={this.handleClose} checkLogin={this.checkLogin} changeView={this.changeView}/>
                    }
                </div>
            </Level>
        );
    }
}

export default Level15;