import React from 'react';
import '../App.css';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

class Level1 extends React.Component {
    render() {
        return (
            <Dialog open={this.props.open} disableBackdropClick={true}>
                <DialogTitle>Congratulations Agent!
                    <IconButton style={{ position: 'absolute', right: 2, top: 2 }} component={RouterLink} to="/home" onClick={this.props.handleCloseDialog} color="inherit">
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                {this.props.academicmode ?
                    <DialogContent dividers>{this.props.children}</DialogContent> :
                    <DialogContent dividers>Your mission is complete! Click the X to return to the home page and receive your next mission.</DialogContent>
                }
            </Dialog>
        );
    }
}

export default Level1;