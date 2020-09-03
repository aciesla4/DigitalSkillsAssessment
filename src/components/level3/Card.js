import React from "react";

class Card extends React.Component {
  render() {
    const { pic } = this.props;
    return (
      <div>
        <input
          id={"level 3 card " + this.props.id}
          className="card"
          type="image"
          alt="pic"
          src={pic}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default Card;
