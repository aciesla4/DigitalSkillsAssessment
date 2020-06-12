import React from 'react';
import '../App.css';
import Level from '../util/Level';
import SimpleMap from '../util/SimpleMap';

class Level12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
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

    logMapClick = (id) => {
        let e = {
            currentTarget: {
                id: ""
            }
        };
        e.currentTarget.id = id;
        this.props.logClick(e);
    };

    render() {
        return (
            <Level
                logClick={this.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='find Copper Harbor on the map.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='You can scroll using the scroll wheel on your mouse and zoom in and out using the + and - buttons in the top left.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! <Something helpful about maps> Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <SimpleMap handleFound={this.handleFound} logClick={this.logMapClick}/>
                </div>
            </Level>
        );
    }
}

export default Level12;