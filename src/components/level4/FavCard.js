import React from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Jewel from "../common/Jewel";

class FavCard extends React.Component {
  render() {
    const { pic } = this.props;
    if (this.props.isJewelShown) {
      return (
        <div className="favcard">
          <Jewel logClick={this.props.logClick} />
          <IconButton
            style={{ color: this.props.color, top: "85%" }}
            id={"level 4 card" + this.props.id}
            onClick={(e) => this.props.onClick(e)}
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
            onClick={this.props.showJewel}
          />
          <IconButton
            style={{ color: this.props.color }}
            id={"level 4 card " + this.props.id}
            onClick={(e) => this.props.onClick(e)}
          >
            <FavoriteIcon />
          </IconButton>
        </div>
      );
    }
  }
}

export default FavCard;
