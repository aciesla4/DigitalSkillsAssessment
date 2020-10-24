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
// import FavCard from "../components/level4/FavCard";
import PropTypes from "prop-types";
import ListOfFavCards from "../components/level4/ListOfFavCards";

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

    // handles setting the color of the heart icon to red when a card is clicked
    function updateColor(i, e) {
        props.logClick(e);
        const list = elements.map((item, j) => {
            if (j === i) {
                return {...item, color: "red"};
            }
            else {
                return item
            }
        })
        setElements(list);
    }

    return (
        <Level
            logClick={props.logClick}
            mission=""
            hintMessage=""
            dialogMessage="Your mission is complete! ... Click the X to return to the home page and receive your next mission."
            correctMoves={correctMoves}
        >
            <div className="level4-grid">
                {elements.map((item, i) => <ListOfFavCards item={item} handleClick={updateColor} logClick={props.logClick}/>)}
            </div>
        </Level>
    );
}

// defines the props the component expects
Level17.propTypes = {
    logClick: PropTypes.func,   // function that handles logging the user's clicks
}
