import React from "react";
import CloseIcon from "@material-ui/icons/Close";

export default function CartCard(props) {
  const { pic, desc, quantity, price, id } = props;
  return (
    <div className="cart-card">
      <img className="image" alt="pic" src={pic} onClick={props.showJewel} />
      <div style={{ position: "absolute", top: 0, left: "250px" }}>
        <h2 style={{ textAlign: "center", padding: 0 }}>{desc}</h2>
        <h4>Quantity: {quantity}</h4>
        <h4>${price}</h4>
      </div>
      <button
        className="delete-button"
        onClick={(e) => props.deleteItem(id, e)}
      >
        <CloseIcon style={{ height: "30px", width: "30px" }} />
      </button>
    </div>
  );
}
