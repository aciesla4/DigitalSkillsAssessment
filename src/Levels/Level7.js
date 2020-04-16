import React from 'react';
import '../App.css';
import '../css/Level7.css';
import Jewel from '../util/Jewel';
import Level from '../util/Level';
import ProductCard from '../util/ProductCard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, Dialog, DialogContent } from '@material-ui/core';
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

class Level7 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
            elements: this.renderCards(),
            numItems: 0,
            items: [],
            isDialogOpen: false,
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

    handleAddItem = (index) => {
        let update = this.state.items;
        update.push(index);
        this.setState({
            numItems: this.state.numItems + 1,
            items: update
        })
    }

    renderCards = () => {
        let pictures = [ gear1, gear2, gear3, gear4, gear5, gear6, gear7, gear8, gear9, gear10, gear11, gear12 ];
        let descriptions = ["Night Vision Glasses", "Laser Shooting Watch", "Walkie Talkies", "Sweat Absorbing Shirt", "20 Pocket Pants", "Hidden Compartment Shoes",
                            "Sun Blocking Hat", "Bulletproof Briefcase", "Long Range Magnifier", "Satellite Phone", "Audio Recording Pen", "Voice Magnifier"];
        const items = [];
        for (var i = 0; i < 12; i++) {
            let index = i;
            items.push(<ProductCard key={i} id={i} pic={pictures[i]} desc={descriptions[i]} color="" isJewelShown={false} onClick={() => this.handleAddItem(index)}/>);
        }
        return items;
    }

    showJewel = () => {
        if (this.state.numItems >= 1) {
            this.setState({
                isDialogOpen: true,
            })
        }
    }

    render() {
        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='add spy gear to your cart and begin checking out.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='Adding gear to your cart can be down by hovering over an item and clicking the add to cart icon. You can begin checking out by clicking the shopping cart icon in the top right.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! There are many ways you can add items to your cart. One some sites, clicking the item takes you to another page where you can add it. Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <div className="bar">
                        <button className="cart" onClick={this.showJewel}>
                            <Badge badgeContent={this.state.numItems} color="secondary" style={{ zIndex: 0 }}>
                                <ShoppingCartIcon style={{ height: '40px', width: '40px' }}/>
                            </Badge>
                        </button>
                    </div>
                    <div className="product-container">
                        {this.state.elements}
                        <br/><br/>
                    </div>
                    <Dialog classes={{ paper: 'jewel-dialog' }} open={this.state.isDialogOpen} disableBackdropClick={true} disableEscapeKeyDown={true} hideBackdrop={true}>
                        <DialogContent>
                            <Jewel handleFound={this.handleFound} />
                        </DialogContent>
                    </Dialog>
                </div>
            </Level>
        );
    }
}

export default Level7;
