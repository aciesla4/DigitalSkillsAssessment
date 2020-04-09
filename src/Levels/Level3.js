import React from 'react';
import '../App.css';
import NavBar from '../util/NavBar';
import Header from '../util/Header';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import $ from "jquery";
import "../css/Jewel.css";
import LearningMode from "../util/LearningMode";
import Card from "../util/Card";

class Level3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelShown: false,
            isJewelFound: false
        }
    }

    componentDidMount() {
        $(document).ready(function() {
            $(".jewel").click(function() {
                $(".animates").css("animation-play-state", "paused");
            });
        })
    }

    handleFound = () => {
        this.setState({
            isJewelFound: true,
            isJewelShown: false
        })
    }

    handleCloseEnd = () => {
        this.setState({
            isJewelFound: false
        })
        this.props.getLevelChange()
    }

    render() {
        return (
            <div>
                <Header mission="find the cat image."/>
                <NavBar academicmode={this.props.academicmode} openHint={this.props.openHint} hint={this.props.hint} getModeSwitch={this.getModeSwitch}/>
                {this.props.academicmode &&
                    <LearningMode academicmode={this.props.academicmode}/>
                }
                <br /><br /><br />
                <Card />

                <Dialog open={this.state.isJewelFound} onClose={this.handleCloseEnd} disableBackdropClick={true}>
                    <DialogTitle>Congratulations Agent!
                        <IconButton style={{ position: 'absolute', right: 2, top: 2 }} component={RouterLink} to="/home" onClick={this.handleCloseEnd} color="inherit">
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    {this.props.academicmode ?
                        <DialogContent dividers>
                            Your mission is complete! Pop ups can always be closed by clicking the X, but some sites also let you click anywhere else on the page to get rid of them. Click the X to return to the home page and receive your next mission.
                        </DialogContent>
                        :
                        <DialogContent dividers>
                            Your mission is complete! Click the X to return to home page and get your next mission.
                        </DialogContent>
                    }
                </Dialog>
            </div>
        );
    }
}

export default Level3;