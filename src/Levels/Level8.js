import React, { useState } from "react";
import "../css/Level8.css";
import prices from "../components/level8";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import CartCard from "../components/level8/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { changeLevel } from "../redux/slices/levelSlice";
import { selectItems } from "../redux/slices/itemsSlice";

export default function Level8(props) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const [isJewelFound, setIsJewelFound] = useState(false);
  const [isJewelShown, setIsJewelShown] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [elements, setElements] = useState(items);

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    setIsJewelFound(false);
    dispatch(changeLevel());
  }

  function deleteItem(id, e) {
    e.currentTarget.id = "level 8 card " + id;
    props.logClick(e);
    const update = [...elements.filter((element) => element.id !== id)];
    setElements([...update]);
    setDeleted(true);
  }

  function calculateSummary() {
    let subtotal = 0;
    for (var i = 0; i < elements.length; i++) {
      let item = elements[i];
      subtotal = subtotal + prices.prices[item.id];
    }
    subtotal = parseFloat(subtotal.toFixed(2));
    let tax = parseFloat((0.06 * subtotal).toFixed(2));
    let total = parseFloat((subtotal + 5.99 + tax).toFixed(2));
    return { subtotal, tax, total };
  }

  function showJewel(e) {
    if (deleted) {
      props.logClick(e);
      setIsJewelShown(true);
    }
  }

  return (
    <Level
      level={8}
      logClick={props.logClick}
      mission="delete an item from your cart then check out."
      hintMessage="Deleting an item can be done by clicking the X in the right hand corner of the item."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Always double check that the items you want are correct in your cart before checking out. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <div className="cart-container">
          {elements.map((element) => (
            <CartCard
              key={element.id}
              id={element.id}
              pic={element.pic}
              desc={element.desc}
              quantity={1}
              price={prices.prices[element.id]}
              deleteItem={deleteItem}
            />
          ))}
          <br />
          <br />
        </div>
        <div className="check-out">
          <h2 style={{ textAlign: "center" }}>Order Summary</h2>
          <h4 style={{ float: "left" }}>Subtotal: </h4>
          <h4 style={{ float: "right" }}>${calculateSummary().subtotal}</h4>
          <br />
          <h4 style={{ clear: "both", float: "left" }}>Estimated Shipping: </h4>
          <h4 style={{ float: "right" }}>$5.99</h4>
          <br />
          <h4 style={{ clear: "both", float: "left" }}>Estimated Tax: </h4>
          <h4 style={{ float: "right" }}>${calculateSummary().tax}</h4>
          <br />
          <h3 style={{ clear: "both", float: "left" }}>Total: </h3>
          <h3 style={{ float: "right" }}>${calculateSummary().total}</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button
            className="check-out-button"
            id="level 8 checkout button"
            onClick={(e) => showJewel(e)}
          >
            Check Out
          </button>
        </div>
      </div>
      {isJewelShown && <Jewel top="70%" left="82%" handleFound={handleFound} />}
    </Level>
  );
}
