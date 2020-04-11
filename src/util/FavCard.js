import React from 'react';
import "../css/Card.css";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';

class FavCard extends React.Component {
    render() {
        const { pic } = this.props
        return (
            <div style={{ height: '260px', width: '215px', padding: '10px', border: '1px solid lightgray', boxShadow: '-1px 1px 1px lightgrey, -2px 2px 2px lightgrey' }}>
                <img style={{ width: '200px', height: '200px', padding: '10px' }} alt="pic" src={pic} onClick={this.props.showJewel}/>
                <IconButton style={{ color: this.props.color }} onClick={this.props.onClick}><FavoriteIcon/></IconButton>
            </div>
        )
    }
}

export default FavCard;