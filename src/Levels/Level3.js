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
import "../css/Level3.css";
import Dog from '../images/dog.jpg';
import Cat from '../images/cat.jpg';
import Jewel from '../util/Jewel';
import Modal from "../util/Modal";

class Level3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelShown: false,
            isJewelFound: false,
            elements: this.renderCards(),
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

    showJewel = () => {
        let update = this.state.elements;
        update[22] = (<div><Jewel handleFound={this.handleFound} /></div>)
        this.setState({
            elements: update
        })
    }

    renderCards = () => {
        const items = []
        for (var i = 0; i < 40; i++) {
            if (i === 22) {
                items.push(<Card key={i} id={i} pic={Cat} showJewel={this.showJewel}/>)
            }
            else {
                items.push(<Card key={i} id={i} pic={Dog} />)
            }
        }
        return items;
    }

    getModeSwitch = () => {
        let oldValue = this.state.academicmode
        this.setState({
            academicmode: !oldValue
        })
        this.props.getModeSwitch()
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
                <div className="grid-container">
                    {this.state.elements}
                </div>
                <Modal show={this.props.hint} last={true} heading="Hint" closeModal={this.props.closeHint} x="75%" y="15%" modalStyle="modalR">
                    TODO: hint
                </Modal>
                <Dialog open={this.state.isJewelFound} onClose={this.handleCloseEnd} disableBackdropClick={true}>
                    <DialogTitle>Congratulations Agent!
                        <IconButton style={{ position: 'absolute', right: 2, top: 2 }} component={RouterLink} to="/home" onClick={this.handleCloseEnd} color="inherit">
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    {this.props.academicmode ?
                        <DialogContent dividers>
                            Your mission is complete! Changing the view when searching for an image can help you find the one you are looking for. Click the X to return to the home page and receive your next mission.
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