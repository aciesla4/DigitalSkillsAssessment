import React from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction, Drawer, FormControlLabel, Switch } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HelpIcon from '@material-ui/icons/Help';
import $ from "jquery";

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        const dt = new Date()
        this.state = {
            start: dt,
            lastClickTime: dt,
            isMenuOpen: false
        }
    }

    componentDidMount() {
        $("div").click(function() {
            $(".animated").css("animation-play-state", "paused");
        });
    }

    logClick = (e) => {
        const dt = new Date()
        axios({
            method: 'post',
            url: 'http://localhost:8080/logging',
            data: {
                id: e.currentTarget.id,
                time: (dt - this.state.start) / 1000
            }
        })

    }

    render() {
        const currentPath = window.location.pathname
        return (
            <AppBar position="fixed" style={{ backgroundColor: '#fff', top: 'auto', bottom: 0}}>
                <BottomNavigation>
                    <FormControlLabel style={{ position: 'absolute', left: 20, color: 'black', top: 10 }} control={
                        <Switch checked={this.props.learningMode} onChange={this.props.getModeSwitch} />
                    } label="Learning Mode" />
                    {currentPath.includes("page") ?
                        <BottomNavigationAction id="home" icon={<HomeIcon/>} component={RouterLink} to="/home" onClick={this.logClick} /> :
                        <BottomNavigationAction id="accept" icon={<CheckCircleIcon/>} component={RouterLink} to="/page" onClick={this.logClick} />
                    }
                    {currentPath.includes("page") ?
                        <BottomNavigationAction style={{ position: 'absolute', right: 0 }} id="question" icon={<HelpIcon/>} /> :
                        <div className="animated">
                            <BottomNavigationAction className={"stop-animation"} id="phone" icon={<PhoneIcon/>} onClick={this.props.getPhoneClick}/>
                        </div>
                    }
                </BottomNavigation>
            </AppBar>
        );
    }
}

export default NavBar;