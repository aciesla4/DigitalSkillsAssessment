import React from "react";
import PropTypes from "prop-types";
import FavCard from "./FavCard";

// Component for the grid of favorite cards used in Level 4
export default function ListOfFavCards(props) {
    return (
        <div className="level4-content">
            <div>
                <FavCard key={props.item.id} id={props.item.id} pic={props.item.pic} color={props.item.color} isJewelShown={props.item.isJewelShown} onClick={(e) => props.handleClick(props.item.id, e)} logClick={props.logClick}/>
            </div>
        </div>
    )
}

// defines the props the component expects
ListOfFavCards.propTypes = {
    item: PropTypes.object,         // the item to be rendered
    handleClick: PropTypes.func,    // function that handles what happens when the card is clicked on
    logClick: PropTypes.func,       // function that logs the user's click
}