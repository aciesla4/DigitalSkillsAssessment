import React from 'react';
import '../App.css';
import Jewel from '../util/Jewel';
import { ResizableBox } from 'react-resizable';
import '../css/Level5.css';
import Level from '../util/Level';

class Level5 extends React.Component {
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

    handleResize = (e) => {
        e.currentTarget.id = "level 5 box resized";
        this.props.logClick(e);
    }

    render() {
        return (
            <Level
                logClick={this.props.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='resize the box.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='Resizing can be done by clicking the handle in the lower right of the box, and dragging it to make the box bigger or smaller.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Resizing is a common way to make things bigger or smaller. Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <Jewel top='25%' left='25%' handleFound={this.handleFound} />
                    <ResizableBox id="level 5 box resized" width={1250} height={450} minConstraints={[100, 100]} maxConstraints={[1530, 600]} onResizeStop={this.handleResize}/>
                </div>
            </Level>
        );
    }
}

export default Level5;
