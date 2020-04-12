import React from 'react';
import '../App.css';
import Jewel from '../util/Jewel';
import { ResizableBox } from 'react-resizable';
import '../css/Level5.css';
import Level from '../util/Level';

class Level5 extends React.Component {
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
                    <ResizableBox width={1500} height={550} minConstraints={[100, 100]} maxConstraints={[1530, 600]} />
                </div>
            </Level>
        );
    }
}

export default Level5;
