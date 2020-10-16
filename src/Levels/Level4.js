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
  nature12,
} from "../components/level4";
import Level from "../components/common/Level";
import ListOfFavCards from "../components/level4/ListOfFavCards";
import PropTypes from "prop-types";

// Component for Level 4 - favoriting an item
export default function Level4(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Get a favorited image by clicking on one.</li>
        <li>Get the jewel by clicking on it.</li>
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

  // handles when the user clicks the heart on a card and shows the jewel in the picture's place
  function handleClick(i, e) {
    props.logClick(e);
    const list = elements.map((item, j) => {
      if (j === i) {
        return {...item, color: 'red', isJewelShown: true}
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
      mission="favorite an item."
      hintMessage="Favoriting an item can be done by clicking the heart icon under an image."
      dialogMessage="Your mission is complete! Favoriting something is a common way to save something to be found later. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <div className="level4-grid">
        {elements.map((item, i) =>
          <ListOfFavCards item={item} handleClick={handleClick} logClick={props.logClick} />
        )}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level4.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
