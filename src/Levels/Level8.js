import React from 'react';
import '../App.css';
import '../css/Level8.css';
import Jewel from '../util/Jewel';
import Level from '../util/Level';
import CartCard from '../util/CartCard';

class Level8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
            prices: [99.99, 249.99, 64.99, 21.99, 34.99, 69.99, 14.99, 89.99, 67.99, 299.99, 54.99, 31.99],
            elements: this.props.items,
            deleted: false,
            isJewelShown: false,
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

    deleteItem = (id, e) => {
        e.currentTarget.id = "level 8 card " + id;
        this.props.logClick(e);
        const update = this.state.elements.filter(element => element.id !== id);
        this.setState({
            elements: update,
            deleted: true,
        });
    };

    calculateSummary = () => {
        let subtotal = 0;
        for (var i = 0; i < this.state.elements.length; i++) {
            let item = this.state.elements[i];
            subtotal = subtotal + this.state.prices[item.id];
        }
        subtotal = parseFloat(subtotal.toFixed(2));
        let tax = parseFloat((0.06 * subtotal).toFixed(2));
        let total = parseFloat((subtotal + 5.99 + tax).toFixed(2));
        return {subtotal, tax, total};
    };

    showJewel = (e) => {
        this.props.logClick(e);
        this.setState({
            isJewelShown: true,
        })
    };

    render() {
        return (
            <Level
                level={8}
                logClick={this.props.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='delete an item from your cart then check out.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='Deleting an item can be done by clicking the X in the right hand corner of the item.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Always double check that the items you want are correct in your cart before checking out. Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <div className="cart-container">
                        {this.state.elements.map(element => (
                            <CartCard
                                key={element.id}
                                id={element.id}
                                pic={element.pic}
                                desc={element.desc}
                                quantity={1}
                                price={this.state.prices[element.id]}
                                deleteItem={this.deleteItem}
                            />
                            )
                        )}
                        <br/><br/>
                    </div>
                    <div className="check-out">
                        <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
                        <h4 style={{ float: 'left' }}>Subtotal: </h4><h4 style={{ float: 'right' }}>${this.calculateSummary().subtotal}</h4><br/>
                        <h4 style={{ clear: 'both', float: 'left' }}>Estimated Shipping: </h4><h4 style={{ float: 'right' }}>$5.99</h4><br/>
                        <h4 style={{ clear: 'both', float: 'left' }}>Estimated Tax: </h4><h4 style={{ float: 'right' }}>${this.calculateSummary().tax}</h4><br/>
                        <h3 style={{ clear: 'both', float: 'left' }}>Total: </h3><h3 style={{ float: 'right' }}>${this.calculateSummary().total}</h3><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <button className="check-out-button" id="level 8 checkout button" onClick={(e) => this.showJewel(e)}>Check Out</button>
                    </div>
                </div>
                {this.state.isJewelShown && <Jewel top='70%' left='82%' handleFound={this.handleFound}/>}
            </Level>
        );
    }
}

export default Level8;