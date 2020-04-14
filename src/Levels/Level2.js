import React from 'react';
import '../App.css';
import { Container, Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Jewel from '../util/Jewel';
import Level from '../util/Level';

class Level2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            isDialogOpen: true,
            academicmode: this.props.academicmode,
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

    handleClose = () => {
        this.setState({
            isDialogOpen: false,
        })
    }

    render() {
        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='find the jewel on the page by closing the pop up.'
                isHintShown={false}
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Pop ups can always be closed by clicking the X, but some sites also let you click anywhere else on the page to get rid of them. Click the X to return to the home page and receive your next mission.'
            >
                <Container>
                    <Dialog open={this.state.isDialogOpen} disableBackdropClick={true} disableEscapeKeyDown={true} hideBackdrop={true}>
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
                    <Jewel top='50%' left='50%' handleFound={this.handleFound} />
                </Container>
            </Level>
        );
    }
}

export default Level2;