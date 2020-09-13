import React, { useState } from "react";
import "../css/Level7.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, Dialog, DialogContent } from "@material-ui/core";
import elements from "../components/level7";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import ProductCard from "../components/level7/ProductCard";
import { useDispatch } from "react-redux";
import { updateItems } from "../redux/slices/itemsSlice";

// Component for level 7 - putting items in a shopping cart
export default function Level7(props) {
  // local state for the number of items chosen, which items are chosen, and if the jewel dialog is shown
  const [numItems, setNumItems] = useState(0);
  const [items, setItems] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // redux - allows methods to update global state to be called
  const dispatch = useDispatch();

  // handles adding an item to the list of items in the user's cart
  function handleAddItem(element, e) {
    props.logClick(e);
    let update = items;
    update.push(element);
    setNumItems(numItems + 1);
    setItems(update);
  }

  // handles showing the jewel when the user clicks the shopping cart
  function showJewel(e) {
    props.logClick(e);
    if (numItems >= 1) {
      setIsDialogOpen(true);
    }
    dispatch(updateItems(items));
  }

  return (
    <Level
      logClick={props.logClick}
      mission="add spy gear to your cart and begin checking out."
      hintMessage="Adding gear to your cart can be down by hovering over an item and clicking the add to cart icon. You can begin checking out by clicking the shopping cart icon in the top right."
      dialogMessage="Your mission is complete! There are many ways you can add items to your cart. One some sites, clicking the item takes you to another page where you can add it. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <div className="bar">
          <button
            className="cart"
            id="level 7 shopping cart button"
            onClick={showJewel}
          >
            <Badge
              badgeContent={numItems}
              color="secondary"
              style={{ zIndex: 0 }}
            >
              <ShoppingCartIcon style={{ height: "40px", width: "40px" }} />
            </Badge>
          </button>
        </div>
        <div className="product-container">
          {elements.elements.map((element) => (
            <ProductCard
              key={element.id}
              id={"level 7 card " + element.id}
              element={element}
              onClick={(e) => {
                handleAddItem(element, e);
              }}
            />
          ))}
          <br />
          <br />
        </div>
        <Dialog
          classes={{ paper: "jewel-dialog" }}
          open={isDialogOpen}
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
          hideBackdrop={true}
        >
          <DialogContent>
            <Jewel logClick={props.logClick} />
          </DialogContent>
        </Dialog>
      </div>
    </Level>
  );
}
