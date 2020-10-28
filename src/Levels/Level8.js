import React, { useState } from "react";
import "../css/Level8.css";
import prices from "../components/level8";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import CartCard from "../components/level8/CartCard";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/slices/itemsSlice";
import PropTypes from "prop-types";

// Component for Level 8 - deleting an item from the shopping cart and checking out
export default function Level8(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Change the items in the cart by clicking the X to remove an item.</li>
        <li>Get the remaining items in the cart by clicking the check out button.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // redux - gets the current value of the items variable
  const items = useSelector(selectItems);

  // local state for if the jewel is shown, if an item has been deleted, and the list of items to be displayed
  const [isJewelShown, setIsJewelShown] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [elements, setElements] = useState(items);

  // handles when an item is deleted by setting the local state to true and removing the item from the page
  function deleteItem(element, e) {
    e.currentTarget.id = "Changed the items in the cart by removing the " + element.desc;
    props.logClick(e, 8);
    let update;
    if (element.quantity >= 2) {
      update = elements.map(el => el.id === element.id ? {...el, quantity: element.quantity - 1} : el);
    }
    else {
      update = [...elements.filter((el) => el.id !== element.id)];
    }
    setElements([...update]);
    setDeleted(true);
  }

  // calculates the subtotal, tax, and total shown in the summary field of the page
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

  // handles showing the jewel once an item has been deleted
  function showJewel(e) {
    if (deleted) {
      props.logClick(e, 8);
      setIsJewelShown(true);
    }
  }

  return (
    <Level
      logClick={props.logClick}
      mission="delete an item from your cart then check out."
      hintMessage="Deleting an item can be done by clicking the X in the right hand corner of the item."
      dialogMessage="Your mission is complete! Always double check that the items you want are correct in your cart before checking out. Click the X to receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        <div className="cart-container">
          {elements.map((element) => (
            <CartCard
              key={element.id}
              id={element.id}
              pic={element.pic}
              desc={element.desc}
              quantity={element.quantity}
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
            id="Got the remaining items in the cart by clicking the check out button."
            onClick={(e) => showJewel(e)}
          >
            Check Out
          </button>
        </div>
      </div>
      {isJewelShown && <Jewel top="70%" left="82%" logClick={props.logClick} />}
    </Level>
  );
}

// defines the props the component expects
Level8.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
