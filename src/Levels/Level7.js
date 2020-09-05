import React, { useState } from "react";
import "../css/Level7.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, Dialog, DialogContent } from "@material-ui/core";
import elements from "../components/level7";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import ProductCard from "../components/level7/ProductCard";
import { useDispatch } from "react-redux";
import { changeLevel } from "../redux/slices/levelSlice";
import { updateItems } from "../redux/slices/itemsSlice";

export default function Level7(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);
  const [numItems, setNumItems] = useState(0);
  const [items, setItems] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dispatch = useDispatch();

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
    dispatch(updateItems(items));
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    setIsJewelFound(false);
    dispatch(changeLevel());
  }

  function handleAddItem(element, e) {
    props.logClick(e);
    let update = items;
    update.push(element);
    setNumItems(numItems + 1);
    setItems(update);
  }

  function showJewel(e) {
    props.logClick(e);
    if (numItems >= 1) {
      setIsDialogOpen(true);
    }
  }

  return (
    <Level
      level={7}
      logClick={props.logClick}
      mission="add spy gear to your cart and begin checking out."
      hintMessage="Adding gear to your cart can be down by hovering over an item and clicking the add to cart icon. You can begin checking out by clicking the shopping cart icon in the top right."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
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
            <Jewel handleFound={handleFound} />
          </DialogContent>
        </Dialog>
      </div>
    </Level>
  );
}
