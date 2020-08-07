import React from 'react';
import '../css/Level5.css';
import Level from '../util/Level';
import Login from "../util/Login";
import ForgotPassword from "../util/ForgotPassword";
import ResetPassword from "../util/ResetPassword";
import Jewel from "../util/Jewel";

class Level14 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            academicMode: this.props.academicMode,
            showLogin: true,
            showForgotPassword: false,
            showResetPassword: false,
            showDone: false,
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
        this.props.getLevelChange()
    }

    changeView = (view) => {
        if(view === 'forgotPassword') {
            this.setState({
                showLogin: !this.state.showLogin,
                showForgotPassword: !this.state.showForgotPassword,
            })
        }
        else if (view === 'resetPassword') {
            this.setState({
                showForgotPassword: !this.state.showForgotPassword,
                showResetPassword: !this.state.showResetPassword,
            })
        }
        else if (view === 'resetToLogin') {
            this.setState({
                showResetPassword: !this.state.showResetPassword,
                showLogin: !this.state.showLogin,
            })
        }
        else if (view === 'showDone') {
            this.setState({
                showLogin: !this.state.showLogin,
                showDone: !this.state.showDone
            })
        }
    }

    render() {
        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='log into the learning portal using the username "agent203@spyacademy.org" and password "password"'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='You may not have the right password. Try resetting it.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! It is easy to forget passwords, but also easy to reset them. Most sites will email you a link to reset your password in a similar manner. Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    {this.state.showLogin && <Login error={this.state.error} handleClose={this.handleClose} checkLogin={this.checkLogin} changeView={this.changeView}/>}
                    {this.state.showForgotPassword && <ForgotPassword changeView={this.changeView}/>}
                    {this.state.showResetPassword && <ResetPassword changeView={this.changeView}/>}
                    {this.state.showDone && <Jewel left='50%' top='50%' handleFound={this.handleFound} />}
                </div>
            </Level>
        );
    }
}

export default Level14;