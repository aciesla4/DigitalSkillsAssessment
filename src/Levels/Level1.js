import React from 'react';
import '../App.css';
import NavBar from '../util/NavBar';
import Header from '../util/Header';
import { Container, Box, Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import $ from "jquery";
import "../css/Jewel.css";
import LearningMode from '../util/LearningMode';
import Modal from '../util/Modal';
import Jewel from '../util/Jewel';

class Level1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogOpen: true,
            isJewelShown: false,
            isJewelFound: false,
            academicmode: this.props.academicmode,
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

    getModeSwitch = () => {
        let oldValue = this.state.academicmode
        this.setState({
            academicmode: !oldValue
        })
        this.props.getModeSwitch()
    }

    render() {
        console.log(this.props.hint)
        return (
            <div>
                <Header mission="find the jewel on the page by scrolling down." />
                <Container>
                    <Box my={2}>
                        {[...new Array(45)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                    <Jewel top='' handleFound={this.handleFound} />
                    <br /><br /><br /><br /><br /><br />
                </Container>
                <NavBar academicmode={this.props.academicmode} openHint={this.props.openHint} hint={this.props.hint} getModeSwitch={this.getModeSwitch}/>
                {this.props.academicmode &&
                    <LearningMode academicmode={this.props.academicmode}/>
                }
                <Modal show={this.props.hint} last={true} heading="Hint" closeModal={this.props.closeHint} x="75%" y="15%" modalStyle="modalR">
                    Scrolling down means moving the screen down by pressing the down arrow key or by clicking and dragging the scroll bar (on the right) down.
                </Modal>
                <Dialog open={this.state.isJewelFound} onClose={this.handleCloseEnd} disableBackdropClick={true}>
                    <DialogTitle>Congratulations Agent!
                        <IconButton style={{ position: 'absolute', right: 2, top: 2 }} component={RouterLink} to="/home" onClick={this.handleCloseEnd} color="inherit">
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    {this.props.academicmode ?
                        <DialogContent dividers>
                            Your first mission is complete! Sometimes there is a lot of information on one page, so you must scroll down or up to view it all. Click the X to return to the home page and receive your next mission.
                        </DialogContent>
                        :
                        <DialogContent dividers>
                            Your first mission is complete! Click the X to return to the home page and receive your next mission.
                        </DialogContent>
                    }
                </Dialog>
            </div>
        );
    }
}

export default Level1;