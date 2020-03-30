import React from 'react';
import '../App.css';
import NavBar from '../Initial/NavBar';
import Header from './Header';
import { Container, Box, Dialog, DialogContent, DialogTitle, IconButton, SvgIcon} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import $ from "jquery";

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
        $("svg").click(function() {
            $(".animates").css("animation-play-state", "paused");
        });
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
    }

    render() {
        return (
            <div>
                <Header mission="find the jewel on the page by closing the pop up."/>
                <NavBar/><br /><br />
                <Container>
                    <Box my={2}>
                        {[...new Array(15)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                    <Dialog open={this.state.isDialogOpen} onClose={this.handleClose} disableBackdropClick={true}>
                        <DialogTitle>Lorem ipsum dolor sit amet.
                            <IconButton style={{ position: 'absolute', right: 2, top: 2 }} onClick={this.handleClose} color="primary">
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
                            <IconButton style={{ margin: 'auto', width: '100%' }} color="inherit" onClick={this.handleFound}>
                                <SvgIcon className="animates" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z" />
                                </SvgIcon>
                            </IconButton>
                    }
                    <Dialog open={this.state.isJewelFound} onClose={this.handleCloseEnd} disableBackdropClick={true}>
                        <DialogTitle>Congratulations Agent!
                            <IconButton style={{ position: 'absolute', right: 2, top: 2 }} component={RouterLink} to="/home" onClick={this.handleCloseEnd} color="primary">
                                <CloseIcon/>
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers>
                            Your first mission is complete! We'll take you back to the home page to explain your next mission.
                        </DialogContent>
                    </Dialog>
                </Container>
            </div>
        );
    }
}

export default Level2;