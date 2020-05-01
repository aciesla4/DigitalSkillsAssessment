import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

class CartCard extends React.Component {
    render() {
        const { pic, desc, quantity, price, id } = this.props
        return (
            <div className="cart-card">
                <img className="image" alt="pic" src={pic} onClick={this.props.showJewel}/>
                <div style={{ position: 'absolute', top: 0, left: '250px'}}>
                    <h2 style={{ textAlign: 'center', padding: 0 }}>{desc}</h2>
                    <h4>Quantity: {quantity}</h4>
                    <h4>${price}</h4>
                </div>
                <button className="delete-button" onClick={() => this.props.deleteItem(id)}><CloseIcon style={{ height: '30px', width: '30px' }}/></button>
            </div>
        )
    }
}

export default CartCard;