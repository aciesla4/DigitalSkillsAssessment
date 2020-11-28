import React, { useState } from "react";
import "../css/Level4.css";
import {
    nature1,
    nature2,
    nature3,
    nature4,
    nature5,
    nature6,
    nature7,
    nature8,
    nature9,
    nature10,
    nature11,
    nature12
} from "../components/level4";
import Level from "../components/common/Level";
// import Jewel from "../components/common/Jewel";
import ListOfFavCards from "../components/level4/ListOfFavCards";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
    const [elements, setElements] = useState([
        { id: 0, pic: nature1, color: "" },
        { id: 1, pic: nature2, color: "" },
        { id: 2, pic: nature3, color: "" },
        { id: 3, pic: nature4, color: "" },
        { id: 4, pic: nature5, color: "" },
        { id: 5, pic: nature6, color: "" },
        { id: 6, pic: nature7, color: "" },
        { id: 7, pic: nature8, color: "" },
        { id: 8, pic: nature9, color: "" },
        { id: 9, pic: nature10, color: "" },
        { id: 10, pic: nature11, color: "" },
        { id: 11, pic: nature12, color: "" },
    ]);

    const [favorited, setFavorited] = useState([]);

    // handles setting the color of the heart icon to red when a card is clicked
    function updateColor(i, e) {
        props.logClick(e);
        let update = [...favorited];
        update.push(i);
        setFavorited(update);
        const list = elements.map((item, j) => {
            if (j === i) {
                return {...item, color: "red"};
            }
            else {
                return item
            }
        })
        setElements(list);
        console.log(update);
    }

    return (
        <Level
            logClick={props.logClick}
            mission=""
            hintMessage=""
            dialogMessage="Your mission is complete! ... Click the X to receive your next mission."
            correctMoves={correctMoves}
        >
            <div>
                <div className="bar">
                    <p style={{ textAlign: "left", paddingLeft: "20px" }}>
                        Hello, Agent.
                    </p>
                    <button
                        className="cart"
                        id="Navigated to the checkout by clicking the shopping cart button."

                    >
                        <ShoppingCartIcon style={{ height: "40px", width: "40px" }} />
                    </button>
                </div>
                <div className="product-container">
                    {elements.map((item, i) => <ListOfFavCards item={item} handleClick={updateColor} logClick={props.logClick}/>)}
                </div>
            </div>
        </Level>
    );
}

// defines the props the component expects
Level17.propTypes = {
    logClick: PropTypes.func,   // function that handles logging the user's clicks
}
