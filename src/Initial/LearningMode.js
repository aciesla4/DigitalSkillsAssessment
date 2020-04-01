import React from 'react';
import '../css/Modal.css';
import Modal from "../util/Modal";

class LearningMode extends React.Component {
    constructor(props){
        super(props)
        let open = this.props.academicMode;
        this.state = {
            isM1: open,
            isM2: false
        }
    }

    openNext = () => {
        this.setState({
            isM1: false,
            isM2: true
        })
    }

    closeModal = () => {
        this.setState({
            isM2: false
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.isM1} heading="Check Button" openNext={this.openNext} x="30%" y="15%">Click this button to begin a level</Modal>
                <Modal show={this.state.isM2} last={true} heading="Phone Button" closeModal={this.closeModal} x="75%" y="15%">When this rings, HQ is calling. Click to pick it up and receive their message</Modal>
            </div>
        )
    }
}

export default LearningMode;



