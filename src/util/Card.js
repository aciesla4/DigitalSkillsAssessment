import React from 'react';

class Card extends React.Component {
    render() {
        const { pic } = this.props
        return (
            <div>
                <input className="card" type="image" alt="pic" src={pic} onClick={this.props.showJewel}/>
            </div>
        )
    }
}

export default Card;