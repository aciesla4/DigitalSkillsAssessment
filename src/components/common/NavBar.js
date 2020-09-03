import React from "react";
import "../../css/NavBar.css";
import { FormControlLabel, Switch, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HelpIcon from "@material-ui/icons/Help";
import { Link as RouterLink } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    const dt = new Date();
    this.state = {
      start: dt,
      lastClickTime: dt,
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    $(document).ready(function() {
      $(".stop-animation").click(function() {
        $(".animated").css("animation-play-state", "paused");
      });
    });
  }

  logClick = (e) => {
    console.log(e.currentTarget.id);
    const dt = new Date();
    axios({
      method: "post",
      url: "http://localhost:8080/logging",
      data: {
        id: e.currentTarget.id,
        time: (dt - this.state.start) / 1000,
      },
    });
  };

  render() {
    const currentPath = window.location.pathname;
    return (
      <div className="navbar">
        <FormControlLabel
          style={{ position: "absolute", left: 20, color: "black", bottom: 10 }}
          control={
            <Switch
              id="learning mode switch"
              checked={this.props.academicmode}
              onChange={this.props.getModeSwitch}
            />
          }
          label="Learning Mode"
        />
        {currentPath.includes("level") ? (
          <IconButton
            style={{ position: "absolute", left: "50%", bottom: 0 }}
            id="home button"
            component={RouterLink}
            to="/home"
            onClick={this.logClick}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton
            style={{ position: "absolute", left: "50%", bottom: 0 }}
            id="check button"
            component={RouterLink}
            to={`/level${this.props.level}`}
            onClick={this.logClick}
          >
            <CheckCircleIcon fontSize="large" />
          </IconButton>
        )}
        {currentPath.includes("level") ? (
          <IconButton
            style={{ position: "absolute", right: 0, bottom: 0 }}
            id="open hint button"
            onClick={this.props.openHint}
          >
            <HelpIcon fontSize="large" />
          </IconButton>
        ) : (
          <div className="animated">
            <IconButton
              className={"stop-animation"}
              id="phone button"
              onClick={this.props.getPhoneClick}
            >
              <PhoneIcon fontSize="large" />
            </IconButton>
          </div>
        )}
      </div>
    );
  }
}

export default NavBar;
