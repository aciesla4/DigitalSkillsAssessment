import React from 'react';
import "../css/Card.css";

class Card extends React.Component {
    render() {
        const { id, pic } = this.props
        return (
            <div>
                <input className="card" type="image" alt="pic" src={pic} onClick={this.props.showJewel}/>
            </div>
        )
    }
}

export default Card;