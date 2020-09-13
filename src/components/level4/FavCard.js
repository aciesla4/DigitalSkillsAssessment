import React from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Jewel from "../common/Jewel";

// Component for the favorite cards used in Level 4
export default function FavCard(props) {
    // gets the picture to be shown on the card from props
  const { pic } = props;
  // if the jewel should be shown, a card with the jewel in place of the picture is returned
  if (props.isJewelShown) {
    return (
      <div className="favcard">
        <Jewel logClick={props.logClick} />
        <IconButton
          style={{ color: props.color, top: "85%" }}
          id={"level 4 card" + props.id}
          onClick={(e) => props.onClick(e)}
        >
          <FavoriteIcon />
        </IconButton>
      </div>
    );
  }
  // otherwise, a card with the picture is returned
  else {
    return (
      <div className="favcard">
        <img
          className="picture"
          alt="pic"
          src={pic}
          onClick={props.showJewel}
        />
        <IconButton
          style={{ color: props.color }}
          id={"level 4 card " + props.id}
          onClick={(e) => props.onClick(e)}
        >
          <FavoriteIcon />
        </IconButton>
      </div>
    );
  }
}
