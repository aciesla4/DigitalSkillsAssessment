import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PropTypes from "prop-types";

// Component for the product cards used in Level 7
export default function ProductCard(props) {
    // gets the picture and description from props
  const { pic, desc } = props.element;
  return (
    <div className="product-card">
      <img className="image" alt="pic" src={pic} />
      <h4 style={{ textAlign: "center", padding: 0 }}>{desc}</h4>
      <div className="middle">
        <button
          className="button"
          id={props.id}
          onClick={(e) => props.onClick(e)}
        >
          <AddShoppingCartIcon style={{ height: "50px", width: "50px" }} />
        </button>
      </div>
    </div>
  );
}

// defines the props the component expects
ProductCard.propTypes = {
    element: PropTypes.object,  // object that holds the picture and description on the card
    id: PropTypes.string,       // number for the id of the card
    onClick: PropTypes.func     // function that handles when the card is clicked on
}
