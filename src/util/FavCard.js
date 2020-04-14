import React from 'react';
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Jewel from '../util/Jewel';

class FavCard extends React.Component {
    render() {
        const { pic } = this.props
        if (this.props.isJewelShown) {
            return (
                <div className="favcard">
                    <Jewel handleFound={this.props.handleFound} />
                    <IconButton style={{color: this.props.color, top: '85%'}}
                                onClick={this.props.onClick}><FavoriteIcon/></IconButton>
                </div>
            )
        }
        else {
            return (
                <div className="favcard">
                    <img className="picture" alt="pic" src={pic}
                         onClick={this.props.showJewel}/>
                    <IconButton style={{color: this.props.color}}
                                onClick={this.props.onClick}><FavoriteIcon/></IconButton>
                </div>
            )
        }
    }
}

export default FavCard;