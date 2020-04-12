import React from 'react';
import '../App.css';
import FavCard from "../util/FavCard";
import "../css/Level4.css";
import nature1 from '../images/nature1.jpg';
import nature2 from '../images/nature2.jpg';
import nature3 from '../images/nature3.jpeg';
import nature4 from '../images/nature4.jpg';
import nature5 from '../images/nature5.jpg';
import nature6 from '../images/nature6.jpg';
import nature7 from '../images/nature7.jpg';
import nature8 from '../images/nature8.jpg';
import nature9 from '../images/nature9.jpg';
import nature10 from '../images/nature10.jpg';
import nature11 from '../images/nature11.jpg';
import nature12 from '../images/nature12.jpg';
import Level from '../util/Level';

class Level4 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
            elements: this.renderCards(),
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

    handleClick = (i) => {
        console.log(i);
        console.log(this.state.elements[i]);
        let update = this.state.elements;
        update[i] = (<FavCard key={i} id={i} color="red" handleFound={this.handleFound} isJewelShown={true}/>)
        this.setState({
            elements: update,
        })
    }

    renderCards = () => {
        let pictures = [ nature1, nature2, nature3, nature4, nature5, nature6, nature7, nature8, nature9, nature10, nature11, nature12 ]
        const items = []
        for (var i = 0; i < 12; i++) {
            let index = i
            items.push(<FavCard key={i} id={i} pic={pictures[i]} color="" isJewelShown={false} onClick={() => this.handleClick(index)}/>)
        }
        return items;
    }

    render() {
        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='favorite something.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='hinty hint'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Favoriting something is a common way to save something to be found later. Click the X to return to the home page and receive your next mission.'
            >
                <div className="container">
                    {this.state.elements}
                </div>
            </Level>
        );
    }
}

export default Level4;