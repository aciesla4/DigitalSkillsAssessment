import React from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Jewel from "../common/Jewel";

export default function FavCard(props) {
  const { pic } = props;
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
  } else {
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
