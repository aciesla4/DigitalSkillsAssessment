import React from 'react';
import '../css/Modal.css';
import Modal from "../util/Modal";

class LearningMode extends React.Component {
    constructor(props){
        super(props)
        let open = this.props.academicmode;
        this.state = {
            isM1: open,
            isM2: false,
            isM3: false,
        }
    }

    openSecond = () => {
        this.setState({
            isM1: false,
            isM2: true
        })
    }

    openThird = () => {
        this.setState({
            isM2: false,
            isM3: true
        })
    }

    closeModal = () => {
        this.setState({
            isM3: false
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.isM1} heading="Learning Mode" openNext={this.openSecond} x="0%" y="15%" modalStyle="modalL">Click the slider to turn learning mode off or on. Learning mode gives you extra tips on how to use the site and complete levels.</Modal>
                <Modal show={this.state.isM2} heading="Check Button" openNext={this.openThird} x="40%" y="15%" modalStyle="modal">Click this button to begin a level</Modal>
                <Modal show={this.state.isM3} last={true} heading="Phone Button" closeModal={this.closeModal} x="75%" y="15%" modalStyle="modalR">When this rings, HQ is calling. Click to pick it up and receive their message</Modal>
            </div>
        )
    }
}

export default LearningMode;



