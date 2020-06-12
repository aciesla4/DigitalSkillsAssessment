import React from 'react';
import '../App.css';
import Card from "../util/Card";
import "../css/Level3.css";
import Dog from '../images/dog.jpg';
import Cat from '../images/cat.jpg';
import Jewel from '../util/Jewel';
import Level from '../util/Level';

class Level3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
            elements: this.renderCards(),
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

    showJewel = (e) => {
        this.props.logClick(e);
        let update = this.state.elements;
        update[22] = (<div><Jewel handleFound={this.handleFound} /></div>);
        this.setState({
            elements: update
        });
    };

    handleCardClick = (e) => {
        this.props.logClick(e);
    };

    renderCards = () => {
        const items = [];
        for (var i = 0; i < 40; i++) {
            if (i === 22) {
                items.push(<Card key={i} id={i} pic={Cat} onClick={this.showJewel}/>);
            }
            else {
                items.push(<Card key={i} id={i} pic={Dog} onClick={this.handleCardClick}/>);
            }
        }
        return items;
    };

    render() {
        return (
            <Level
                logClick={this.props.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='find the cat image.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='hinty hint'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Changing the view when searching for an image can help you find the one you are looking for. Click the X to return to the home page and receive your next mission.'
            >
                <div className="grid-container">
                    {this.state.elements}
                </div>
            </Level>
        );
    }
}

export default Level3;

