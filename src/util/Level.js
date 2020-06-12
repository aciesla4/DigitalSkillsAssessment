import React from 'react';
import '../App.css';
import NavBar from '../util/NavBar';
import Header from '../util/Header';
import EndDialog from '../util/EndDialog';
import $ from "jquery";
import LearningMode from '../util/LearningMode';
import Modal from '../util/Modal';

class Level extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: true,
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

    getModeSwitch = (e) => {
        let oldValue = this.state.academicmode;
        this.setState({
            academicmode: !oldValue
        });
        this.props.getModeSwitch(e);
    };

    render() {
        return (
            <div>
                <Header mission={this.props.mission} />
                {this.props.children}
                <NavBar academicmode={this.props.academicmode} openHint={this.props.openHint} getModeSwitch={this.getModeSwitch}/>
                {this.props.academicmode &&
                <LearningMode academicmode={this.props.academicmode} logClick={this.props.logClick}/>
                }
                <Modal id="hint" show={this.props.isHintShown} last={true} heading="Hint" closeModal={this.props.closeHint} x="75%" y="15%" modalStyle="modalR">
                    {this.props.hintMessage}
                </Modal>
                <EndDialog open={this.props.isJewelFound} handleCloseDialog={this.props.handleCloseDialog} academicmode={this.props.academicmode}>
                    {this.props.dialogMessage}
                </EndDialog>
            </div>
        );
    }
}

export default Level;