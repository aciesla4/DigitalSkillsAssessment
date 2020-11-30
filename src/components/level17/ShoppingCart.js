import React from 'react';
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CartCard from "../level8/CartCard";

export default function ShoppingCart(props) {
    // calculates the subtotal, tax, and total shown in the summary field of the page
    function calculateSummary() {
        let subtotal = 0;
        for (var i = 0; i < props.items.length; i++) {
            let item = props.items[i];
            subtotal = subtotal + item.price;
        }
        subtotal = parseFloat(subtotal.toFixed(2));
        let tax = parseFloat((0.06 * subtotal).toFixed(2));
        let total = parseFloat((subtotal + 5.99 + tax).toFixed(2));
        return { subtotal, tax, total };
    }

    return (
        <div>
            <div className="bar">
                <IconButton style={{ paddingLeft: "20px" }} onClick={props.toggleDrawer} id="Changed the side menu to be open.">
                    <MenuIcon />
                </IconButton>
                <p style={{ textAlign: 'center', display: 'inline' }}>Spy Academy Shop</p>
            </div>
            <div className="cart-container" style={{ top: '30px' }}>
                {props.items.map((element) => (
                    <CartCard
                        key={element.id}
                        id={element.id}
                        pic={element.pic}
                        desc={element.desc}
                        quantity={element.quantity}
                        price={element.price}
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
                >
                    Check Out
                </button>
            </div>
        </div>
    )
}