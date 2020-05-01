import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class ProductCard extends React.Component {
    render() {
        const { pic, desc } = this.props.element
            return (
                <div className="product-card">
                    <img className="image" alt="pic" src={pic} onClick={this.props.showJewel}/>
                    <h4 style={{ textAlign: 'center', padding: 0 }}>{desc}</h4>
                    <div className="middle">
                        <button className="button" onClick={this.props.onClick}><AddShoppingCartIcon style={{ height: '50px', width: '50px' }}/></button>
                    </div>
                </div>
            )
    }
}

export default ProductCard;