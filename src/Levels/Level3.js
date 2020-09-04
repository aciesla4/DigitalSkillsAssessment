import React, { useState } from "react";
import "../css/Level3.css";
import Dog from "../images/dog.jpg";
import Cat from "../images/cat.jpg";
import Card from "../components/level3/Card";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";

export default function Level3(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);

  let elements = renderCards();

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    setIsJewelFound(false);
    props.getLevelChange();
  }

  function showJewel(e) {
    props.logClick(e);
    let update = elements;
    update[23] = (
      <div>
        <Jewel handleFound={handleFound} />
      </div>
    );
    elements = update;
  }

  function handleCardClick(e) {
    props.logClick(e);
  }

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
      level={3}
      logClick={props.logClick}
      mission="find the cat image."
      hintMessage="Look in the bottom right hand corner for the cat image."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Changing the view when searching for an image can help you find the one you are looking for. Click the X to return to the home page and receive your next mission."
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
