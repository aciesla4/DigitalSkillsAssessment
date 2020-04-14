import React from 'react';
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Jewel from '../util/Jewel';

class ProductCard extends React.Component {
    render() {
        const { pic, desc } = this.props
        if (this.props.isJewelShown) {
            return (
                <div className="card">
                    <Jewel handleFound={this.props.handleFound} />
                    <IconButton style={{color: this.props.color, top: '85%'}}
                                onClick={this.props.onClick}><AddShoppingCartIcon/></IconButton>
                </div>
            )
        }
        else {
            return (
                <div className="card">
                    <img className="picture" alt="pic" src={pic} onClick={this.props.showJewel}/>
                    <h4 style={{ textAlign: 'center', padding: 0 }}>{desc}</h4>
                    <IconButton onClick={this.props.onClick}><AddShoppingCartIcon/></IconButton>
                </div>
            )
        }
    }
}

export default ProductCard;