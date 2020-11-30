import React from "react";
import {Badge, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Menu(props) {
    return (
        <div className="bar">
            <IconButton style={{ paddingLeft: "20px" }} onClick={props.toggleDrawer} id="Changed the side menu to be open.">
                <MenuIcon />
            </IconButton>
            <p style={{ textAlign: 'center', display: 'inline' }}>Spy Academy Shop</p>
            <button
                className="cart"
                id="Navigated to the checkout by clicking the shopping cart button."
                onClick={(e) => props.handleCartClick(e)}
            >
                <Badge
                    badgeContent={props.numItems}
                    color="secondary"
                    style={{ zIndex: 0 }}
                >
                    <ShoppingCartIcon style={{ height: "40px", width: "40px" }} />
                </Badge>
            </button>
        </div>
    )
}