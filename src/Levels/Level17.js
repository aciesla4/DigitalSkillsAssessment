import React, { useState } from "react";
import "../css/Level17.css";
import gear1 from "../images/gear1.jpg";
import gear2 from "../images/gear2.jpg";
import gear3 from "../images/gear3.jpg";
import gear4 from "../images/gear4.jpg";
import gear5 from "../images/gear5.jpg";
import gear6 from "../images/gear6.jpg";
import gear7 from "../images/gear7.jpg";
import gear8 from "../images/gear8.png";
import gear9 from "../images/gear9.jpg";
import gear10 from "../images/gear10.jpg";
import gear11 from "../images/gear11.jpg";
import gear12 from "../images/gear12.jpeg";
import Level from "../components/common/Level";
// import Jewel from "../components/common/Jewel";
import ProductCard from "../components/level17/ProductCard";
import Menu from "../components/level17/Menu";
import SideNav from "../components/level17/SideNav";
import ShoppingCart from "../components/level17/ShoppingCart";
import PropTypes from "prop-types";


// Component for Level 17 - ??
export default function Level17(props) {
    // a possible correct sequence of moves the user can take to get the jewel
    const correctMoves = (
        <ol>
            <li>Hmm</li>
        </ol>
    )

    // local state for the list of elements to be displayed
    const [elementList, setElementList] = useState([
        { id: 0, pic: gear1, desc: "Night Vision Glasses", quantity: 0, price: 99.99, color: "" },
        { id: 1, pic: gear2, desc: "Laser Shooting Watch", quantity: 0, price: 249.99, color: "" },
        { id: 2, pic: gear3, desc: "Walkie Talkie", quantity: 0, price: 64.99, color: "" },
        { id: 3, pic: gear4, desc: "Sweat Absorbing Shirt", quantity: 0, price: 21.99, color: "" },
        { id: 4, pic: gear5, desc: "20 Pocket Pants", quantity: 0, price: 34.99, color: "" },
        { id: 5, pic: gear6, desc: "Hidden Compartment Shoes", quantity: 0, price: 69.99, color: "" },
        { id: 6, pic: gear7, desc: "Sun Blocking Hat", quantity: 0, price: 14.99, color: "" },
        { id: 7, pic: gear8, desc: "Bulletproof Briefcase", quantity: 0, price: 89.99, color: "" },
        { id: 8, pic: gear9, desc: "Long Range Magnifier", quantity: 0, price: 67.99, color: "" },
        { id: 9, pic: gear10, desc: "Satellite Phone", quantity: 0, price: 299.99, color: "" },
        { id: 10, pic: gear11, desc: "Audio Recording Pen", quantity: 0, price: 54.99, color: "" },
        { id: 11, pic: gear12, desc: "Voice Magnifier", quantity: 0, price: 31.99, color: "" },
    ]);

    // local state for the list of favorited items
    const [favorited, setFavorited] = useState([]);

    // local state for the items added to the cart
    const [items, setItems] = useState([]);
    const [numItems, setNumItems] = useState(0);

    // local state for whether the cart has been clicked
    const [cartClicked, setCartClicked] = useState(false);

    // local state for whether the side navigation menu is open or not
    const [drawerOpen, setDrawerOpen] = useState(false);

    // opens or closes the side navigation menu
    function toggleDrawer(e) {
        props.logClick(e, 17);
        let value = drawerOpen;
        setDrawerOpen(!value);
    }

    // handles adding an item to the list of items in the user's cart
    function handleAddItem(e, element) {
        props.logClick(e, 7);
        element.quantity = element.quantity + 1;
        let update = items;
        if (!update.includes(element)) {
            update.push(element);
        }
        setItems(update);
        setNumItems(numItems + 1);
        console.log(update);
    }

    // handles setting the color of the heart icon to red when a card is clicked
    function updateColor(e, i) {
        props.logClick(e, 17);
        let update = [...favorited];
        update.push(i);
        setFavorited(update);
        const list = elementList.map((item, j) => {
            if (j === i) {
                return {...item, color: "red"};
            }
            else {
                return item
            }
        })
        setElementList(list);
    }

    // handles changing the view when the shopping cart icon is clicked
    function handleCartClick(e) {
        props.logClick(e, 17);
        setCartClicked(true);
    }

    return (
        <Level
            logClick={props.logClick}
            mission=""
            hintMessage=""
            dialogMessage="Your mission is complete! ... Click the X to receive your next mission."
            correctMoves={correctMoves}
        >
            <SideNav open={drawerOpen} onClose={toggleDrawer}/>
            {cartClicked ? (
                <ShoppingCart items={items} toggleDrawer={toggleDrawer}/>
                ) : (
                    <div>
                        <Menu toggleDrawer={toggleDrawer} numItems={numItems} handleCartClick={handleCartClick}/>
                        <div className="product-container">
                            {elementList.map((item, i) => <ProductCard item={item} updateColor={updateColor} addItem={handleAddItem} logClick={props.logClick}/>)}
                        </div>
                    </div>
                )
            }

        </Level>
    );
}

// defines the props the component expects
Level17.propTypes = {
    logClick: PropTypes.func,   // function that handles logging the user's clicks
}
