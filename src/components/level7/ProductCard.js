import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function ProductCard(props) {
  const { pic, desc } = props.element;
  return (
    <div className="product-card">
      <img className="image" alt="pic" src={pic} onClick={props.showJewel} />
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
