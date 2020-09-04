import React, { useState } from "react";
import "../css/Level9.css";
import SpyLogo from "../images/spyLogo.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import ShareModal from "../components/level9/ShareModal";

export default function Level9(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isJewelShown, setIsJewelShown] = useState(false);

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    isJewelFound(false);
    props.getLevelChange();
  }

  function openFacebookDialog(e) {
    props.logClick(e);
    setIsDialogOpen(true);
  }

  function closeFacebookDialog(e) {
    props.logClick(e);
    setIsDialogOpen(false);
    setIsJewelShown(true);
  }

  return (
    <Level
      level={9}
      logClick={props.logClick}
      mission="share your certificate on Facebook."
      hintMessage="The facebook icon is the leftmost icon. Click it, then click post at the bottom of the dialog that pops up."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Most websites allow you to post pages to social media. Often you will need to login before continuing. Click the X to return to the home page and receive your next mission."
    >
      <div>
        <div className="certificate">
          <img className="cert-logo" src={SpyLogo} alt="logo" />
          <br />
          <h1>CONGRATULATIONS AGENT</h1>
          <h3>
            This certifies that the agent has completed the following training:
          </h3>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            <li>Closing a pop up</li>
            <li>Finding an image</li>
            <li>Favoriting an item</li>
            <li>Resizing a box</li>
            <li>Filtering a table</li>
            <li>Purchasing an item</li>
          </ul>
          <h2 style={{ fontFamily: "garamond", fontStyle: "italic" }}>
            Spy Academy
          </h2>
        </div>
        <div className="share">
          <IconButton
            id="level 9 facebook icon"
            onClick={(e) => openFacebookDialog(e)}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            id="level 9 twitter icon"
            onClick={(e) => props.logClick(e)}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton
            id="level 9 instagram icon"
            onClick={(e) => props.logClick(e)}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            id="level 9 email icon"
            onClick={(e) => props.logClick(e)}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
          {isJewelShown && <Jewel handleFound={handleFound} />}
        </div>
        <ShareModal
          show={isDialogOpen}
          onClick={(e) => closeFacebookDialog(e)}
        />
      </div>
    </Level>
  );
}
