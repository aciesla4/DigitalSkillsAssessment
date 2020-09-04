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
import FavCard from "../components/level4/FavCard";
import Level from "../components/common/Level";

export default function Level4(props) {
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

  function handleClick(i, e) {
    props.logClick(e);
    let update = elements;
    update[i] = (
      <FavCard
        key={i}
        id={i}
        color="red"
        handleFound={(e) => handleFound(e)}
        isJewelShown={true}
      />
    );
    elements = update;
  }

  function renderCards() {
    let pictures = [
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
    ];
    const items = [];
    for (var i = 0; i < 12; i++) {
      let index = i;
      items.push(
        <FavCard
          key={i}
          id={i}
          pic={pictures[i]}
          color=""
          isJewelShown={false}
          onClick={(e) => handleClick(index, e)}
        />
      );
    }
    return items;
  }

  return (
    <Level
      level={4}
      logClick={props.logClick}
      mission="favorite something."
      openHint={props.openHint}
      closeHint={props.closeHint}
      isHintShown={props.isHintShown}
      hintMessage="Favoriting an item can be done by clicking the heart icon under an image."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Favoriting something is a common way to save something to be found later. Click the X to return to the home page and receive your next mission."
    >
      <div className="level4-grid">
        <div className="level4-content">{elements.slice(0, 2)}</div>
        <div className="level4-content">{elements.slice(2, 4)}</div>
        <div className="level4-content">{elements.slice(4, 6)}</div>
        <div className="level4-content">{elements.slice(6, 8)}</div>
        <div className="level4-content">{elements.slice(8, 10)}</div>
        <div className="level4-content">{elements.slice(10, 12)}</div>
      </div>
    </Level>
  );
}
