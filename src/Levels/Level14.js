import React from 'react';
import '../App.css';
import Level from '../util/Level';
import Jewel from '../util/Jewel';
import Menu from '../util/Menu';
import GoogleDrive from '../images/googleDrive.jpg';

class Level14 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            academicMode: this.props.academicMode,
            isDriveClicked: false,
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

    handleDriveClick = () => {
        this.setState({
            isDriveClicked: true,
        })
    }

    render() {
        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='find information about Google Drive.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='Google Drive is a software in the Google Suite.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! <TODO> Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <br/><br/><br/>
                    <Menu handleClick={this.handleDriveClick}/><br/><br/><br/>
                    {this.state.isDriveClicked &&
                        <div>
                            <img className="drive-img" alt="pic" src={GoogleDrive}/>
                            <Jewel left='50%' handleFound={this.handleFound} />
                        </div>
                    }
                </div>
            </Level>
        );
    }
}

export default Level14;