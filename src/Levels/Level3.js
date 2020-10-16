import React, { useState } from "react";
import "../css/Level3.css";
import Dog from "../images/dog.jpg";
import Cat from "../images/cat.jpg";
import Card from "../components/level3/Card";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import PropTypes from "prop-types";

// Component for Level 3 - finding an image in a list of images
export default function Level3(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to the cat image by finding it on the screen.</li>
        <li>Change the cat image to the jewel by clicking on it.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for the list of elements to be shown
  const [elements, setElements] = useState(renderCards());

  // handles showing the jewel when the user clicks on the correct image
  function showJewel(e) {
    props.logClick(e);
    let update = [...elements];
    update[23] = (
      <div>
        <Jewel logClick={props.logClick} />
      </div>
    );
    setElements([...update]);
  }

  // handles a click to any incorrect card
  function handleCardClick(e) {
    props.logClick(e);
  }

  // generates the list of card elements to be shown
  function renderCards() {
    const items = [];
    for (var i = 0; i < 32; i++) {
      if (i === 23) {
        items.push(<Card key={i} id={i} pic={Cat} onClick={showJewel} />);
      } else {
        items.push(<Card key={i} id={i} pic={Dog} onClick={handleCardClick} />);
      }
    }
    return items;
  }

  return (
    <Level
      logClick={props.logClick}
      mission="find the jewel under the cat image."
      hintMessage="Look in the bottom right hand corner for the cat image and click the X in the corner to remove the image."
      dialogMessage="Your mission is complete! Changing the view when searching for an image can help you find the one you are looking for. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <div className="level3-grid">
        <div className="level3-content">{elements.slice(0, 4)}</div>
        <div className="level3-content">{elements.slice(4, 8)}</div>
        <div className="level3-content">{elements.slice(8, 12)}</div>
        <div className="level3-content">{elements.slice(12, 16)}</div>
        <div className="level3-content">{elements.slice(16, 20)}</div>
        <div className="level3-content">{elements.slice(20, 24)}</div>
        <div className="level3-content">{elements.slice(24, 28)}</div>
        <div className="level3-content">{elements.slice(28, 32)}</div>
      </div>
    </Level>
  );
}

// defines the props the component expects
Level3.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
