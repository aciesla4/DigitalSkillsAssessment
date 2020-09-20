import React from "react";
import PropTypes from "prop-types";

// Component for the picture cards used in Level 3
export default function Card(props) {
  const { pic } = props;
  return (
    <div>
      <input
        id={"level 3 card " + props.id}
        className="card"
        type="image"
        alt="pic"
        src={pic}
        onClick={props.onClick}
      />
    </div>
  );
}

// defines the props the component expects
Card.propTypes = {
    pic: PropTypes.object,      // object that is the picture to be rendered on the card
    id: PropTypes.number,       // number that represents which card was clicked on
    onClick: PropTypes.func     // function that handles when the card is clicked on
}
