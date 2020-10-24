import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

// Component for the picture cards used in Level 3
export default function Card(props) {
  const { pic } = props;
  return (
    <div className="card">
      <input
        className="card-picture"
        type="image"
        alt="pic"
        src={pic}
      />
      <IconButton id={"Clicked card number " + props.id + "."} onClick={props.onClick} className="close-btn"><CloseIcon/></IconButton>
    </div>
  );
}

// defines the props the component expects
Card.propTypes = {
    pic: PropTypes.string,      // object that is the picture to be rendered on the card
    id: PropTypes.number,       // number that represents which card was clicked on
    onClick: PropTypes.func     // function that handles when the card is clicked on
}
