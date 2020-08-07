import React from 'react';
import '../App.css';
import Level from '../util/Level';
import Jewel from '../util/Jewel';
import Menu from '../util/Menu';
import GoogleDrive from '../images/googleDrive.jpg';

class Level15 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJewelFound: false,
            academicMode: this.props.academicMode,
            isDriveClicked: false,
        }
    }

    handleFound = (e) => {
        this.props.logClick(e);
        this.setState({
            isJewelFound: true,
        });
    };

    handleCloseDialog = (e) => {
        this.props.logClick(e);
        this.setState({
            isJewelFound: false
        });
        this.props.getLevelChange();
    };

    handleDriveClick = (e) => {
        this.props.logClick(e);
        this.setState({
            isDriveClicked: true,
        });
    };

    render() {
        return (
            <Level
                logClick={this.props.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='find information about Google Drive.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='Google Drive is a software in the Google Suite.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Dropdown menus can be tricky to navigate, but moving the mouse slowly over each option can help. Click the X to return to the home page and receive your next mission.'
            >
                <div>

                    <Menu logClick={this.props.logClick} handleClick={this.handleDriveClick}/><br/><br/><br/>
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

export default Level15;