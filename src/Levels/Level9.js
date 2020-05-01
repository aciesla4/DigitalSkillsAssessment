import React from 'react';
import '../App.css';
import Jewel from '../util/Jewel';
import Level from '../util/Level';

class Level9 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
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


    render() {
        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission=''
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage=''
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Click the X to return to the home page and receive your next mission.'
            >

            </Level>
        );
    }
}

export default Level9;