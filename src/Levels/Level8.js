import React from 'react';
import '../App.css';
import '../css/Level8.css';
import Jewel from '../util/Jewel';
import Level from '../util/Level';
import CartCard from '../util/CartCard';
import gear1 from '../images/gear1.jpg';
import gear2 from '../images/gear2.jpg';
import gear3 from '../images/gear3.jpg';
import gear4 from '../images/gear4.jpg';
import gear5 from '../images/gear5.jpg';
import gear6 from '../images/gear6.jpg';
import gear7 from '../images/gear7.jpg';
import gear8 from '../images/gear8.png';
import gear9 from '../images/gear9.jpg';
import gear10 from '../images/gear10.jpg';
import gear11 from '../images/gear11.jpg';
import gear12 from '../images/gear12.jpeg';

class Level8 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
            elements: this.renderCards()
        }
    }

    handleFound = () => {
        this.setState({
            isJewelFound: true,
        })
        this.props.getItems(this.state.items)
    }

    handleCloseDialog = () => {
        this.setState({
            isJewelFound: false
        })
        this.props.getLevelChange()
    }

    deleteItem = () => {
        console.log("delete")
    }

    renderCards = () => {
        let pictures = [ gear1, gear2, gear3, gear4, gear5, gear6, gear7, gear8, gear9, gear10, gear11, gear12 ];
        let descriptions = ["Night Vision Glasses", "Laser Shooting Watch", "Walkie Talkies", "Sweat Absorbing Shirt", "20 Pocket Pants", "Hidden Compartment Shoes",
            "Sun Blocking Hat", "Bulletproof Briefcase", "Long Range Magnifier", "Satellite Phone", "Audio Recording Pen", "Voice Magnifier"];
        let prices = [99.99, 249.99, 64.99, 21.99, 34.99, 69.99, 14.99, 89.99, 67.99, 299.99, 54.99, 31.99];
        const items = [];
        for (var i = 0; i < 12; i++) {
            let index = i
            items.push(<CartCard key={i} pic={pictures[index]} desc={descriptions[index]} price={prices[index]} quantity={1} deleteItem={this.deleteItem}/>);
        }
        return items;
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
                <div>
                    <div className="cart-container">
                        {this.state.elements}
                        <br/><br/>
                    </div>
                    <div className="check-out">
                        <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
                        <h4 style={{ float: 'left' }}>Subtotal: </h4><h4 style={{ float: 'right' }}>$5.99</h4><br/>
                        <h4 style={{ clear: 'both', float: 'left' }}>Estimated Shipping: </h4><h4 style={{ float: 'right' }}>$5.99</h4><br/>
                        <h4 style={{ clear: 'both', float: 'left' }}>Estimated Tax: </h4><h4 style={{ float: 'right' }}>$5.99</h4><br/>
                        <h3 style={{ clear: 'both', float: 'left' }}>Total: </h3><h3 style={{ float: 'right' }}>$5.99</h3><br/>
                        <button className="check-out-button">Check Out</button>
                    </div>
                </div>
            </Level>
        );
    }
}

export default Level8;
