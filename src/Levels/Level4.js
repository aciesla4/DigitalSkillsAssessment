import React from 'react';
import '../App.css';
import NavBar from '../util/NavBar';
import Header from '../util/Header';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import $ from "jquery";
import LearningMode from '../util/LearningMode';
import Modal from '../util/Modal';
import Jewel from '../util/Jewel';
import FavCard from "../util/FavCard";
import "../css/Level4.css";
import nature1 from '../images/nature1.jpg';
import nature2 from '../images/nature2.jpg';
import nature3 from '../images/nature3.jpeg';
import nature4 from '../images/nature4.jpg';
import nature5 from '../images/nature5.jpg';
import nature6 from '../images/nature6.jpg';
import nature7 from '../images/nature7.jpg';
import nature8 from '../images/nature8.jpg';
import nature9 from '../images/nature9.jpg';
import nature10 from '../images/nature10.jpg';
import nature11 from '../images/nature11.jpg';
import nature12 from '../images/nature12.jpg';


class Level4 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogOpen: true,
            isJewelShown: false,
            isJewelFound: false,
            academicmode: this.props.academicmode,
            elements: this.renderCards(),
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

    handleClick = (i, picture) => {
        console.log(i);
        console.log(this.state.elements[i]);
        let update = this.state.elements;
        update[i] = (<FavCard pic={picture} color="red" onClick={(e) => this.handleClick(i)}/>)
        this.setState({
            elements: update
        })
    }

    renderCards = () => {
        let pictures = [ nature1, nature2, nature3, nature4, nature5, nature6, nature7, nature8, nature9, nature10, nature11, nature12 ]
        const items = []
        for (var i = 0; i < 12; i++) {
            let index = i
            items.push(<FavCard key={i} id={i} pic={pictures[i]} color="" onClick={(e) => this.handleClick(index, pictures[i])}/>)
        }
        return items;
    }

    render() {
        return (
            <div>
                <Header mission="favorite something." />
                <NavBar academicmode={this.props.academicmode} openHint={this.props.openHint} hint={this.props.hint} getModeSwitch={this.getModeSwitch}/>
                {this.props.academicmode &&
                <LearningMode academicmode={this.props.academicmode}/>
                }
                <br /><br /><br />
                <div className="grid-container">
                    {this.state.elements}
                </div>
                <Modal show={this.props.hint} last={true} heading="Hint" closeModal={this.props.closeHint} x="75%" y="15%" modalStyle="modalR">
                    hinty hint
                </Modal>
                <Dialog open={this.state.isJewelFound} onClose={this.handleCloseEnd} disableBackdropClick={true}>
                    <DialogTitle>Congratulations Agent!
                        <IconButton style={{ position: 'absolute', right: 2, top: 2 }} component={RouterLink} to="/home" onClick={this.handleCloseEnd} color="inherit">
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    {this.props.academicmode ?
                        <DialogContent dividers>
                            Your mission is complete! Click the X to return to the home page and receive your next mission.
                        </DialogContent>
                        :
                        <DialogContent dividers>
                            Your mission is complete! Click the X to return to the home page and receive your next mission.
                        </DialogContent>
                    }
                </Dialog>
            </div>
        );
    }
}

export default Level4;