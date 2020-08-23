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
        super(props);
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
            numItems: 0,
            items: [],
            isDialogOpen: false,
            elements: [{id: 0, pic: gear1, desc: "Night Vision Glasses"}, {id: 1, pic: gear2, desc: "Laser Shooting Watch"}, {id: 2, pic: gear3, desc: "Walkie Talkie"}, {id: 3, pic: gear4, desc: "Sweat Absorbing Shirt"},
                {id: 4, pic: gear5, desc: "20 Pocket Pants"}, {id: 5, pic: gear6, desc: "Hidden Compartment Shoes"},{id: 6, pic: gear7, desc: "Sun Blocking Hat"}, {id: 7, pic: gear8, desc: "Bulletproof Briefcase"},
                {id: 8, pic: gear9, desc: "Long Range Magnifier"}, {id: 9, pic: gear10, desc: "Satellite Phone"}, {id: 10, pic: gear11, desc: "Audio Recording Pen"}, {id: 11, pic: gear12,desc: "Voice Magnifier"}],
        }
    }

    handleFound = (e) => {
        this.props.logClick(e);
        this.setState({
            isJewelFound: true,
        });
        this.props.getItems(this.state.items);
    };

    handleCloseDialog = (e) => {
        this.props.logClick(e);
        this.setState({
            isJewelFound: false
        });
        this.props.getLevelChange();
    };

    handleAddItem = (element, e) => {
        this.props.logClick(e);
        let update = this.state.items;
        update.push(element);
        this.setState({
            numItems: this.state.numItems + 1,
            items: update
        });
    };

    showJewel = (e) => {
        this.props.logClick(e);
        if (this.state.numItems >= 1) {
            this.setState({
                isDialogOpen: true,
            });
        }
    };

    render() {
        return (
            <Level
                level={7}
                logClick={this.props.logClick}
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
                        <button className="cart" id="level 7 shopping cart button" onClick={this.showJewel}>
                            <Badge badgeContent={this.state.numItems} color="secondary" style={{ zIndex: 0 }}>
                                <ShoppingCartIcon style={{ height: '40px', width: '40px' }}/>
                            </Badge>
                        </button>
                    </div>
                    <div className="product-container">
                        {this.state.elements.map(element => (
                            <ProductCard
                                key={element.id}
                                id={"level 7 card " + element.id}
                                element={element}
                                onClick={(e) => {this.handleAddItem(element, e)}}
                            />
                            )
                        )}
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
