import React from 'react';
import '../App.css';
import NavBar from '../util/NavBar';
import Header from '../util/Header';
import { Container, Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import $ from "jquery";
import LearningMode from "../util/LearningMode";
import Jewel from '../util/Jewel';

class Level2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogOpen: true,
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

    handleClose = () => {
        this.setState({
            isDialogOpen: false,
            isJewelShown: true
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
                <Header mission="find the jewel on the page by closing the pop up."/>
                <NavBar academicmode={this.props.academicmode} openHint={this.props.openHint} hint={this.props.hint} getModeSwitch={this.props.getModeSwitch}/><br /><br />
                <Container>
                    <Dialog open={this.state.isDialogOpen} onClose={this.handleClose} disableBackdropClick={true} disableEscapeKeyDown={true} hideBackdrop={true}>
                        <DialogTitle>Lorem ipsum dolor sit amet.
                            <IconButton style={{ position: 'absolute', right: 2, top: 2 }} onClick={this.handleClose} color="inherit">
                                <CloseIcon/>
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers>
                            Pellentesque et augue scelerisque, sodales lacus ac, maximus ante.
                            Aliquam pellentesque massa eget varius rhoncus.
                            Phasellus pharetra est libero, non porttitor eros iaculis nec.
                            Quisque laoreet justo augue, sed pretium nibh hendrerit ut.
                            Sed in sem condimentum, sollicitudin odio eu, faucibus ante.
                            Sed ex velit, placerat ut tempor sit amet, lacinia eget leo.
                            Nullam blandit et erat non imperdiet.
                        </DialogContent>
                    </Dialog>
                    {this.state.isJewelShown &&
                            <Jewel top='50%' left='50%' handleFound={this.handleFound} />
                    }
                    {this.props.academicmode &&
                        <LearningMode academicmode={this.props.academicmode}/>
                    }
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
                </Container>
            </div>
        );
    }
}

export default Level2;