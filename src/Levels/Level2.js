import React, { useState } from "react";
import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import PropTypes from "prop-types";

// Component for Level 2 - Closing a popup
export default function Level2(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate away from the pop up by clicking the X to close it.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for whether the popup is open or not
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  // handles closing the popup
  function handleClose(e) {
    props.logClick(e, 2);
    setIsDialogOpen(false);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="find the jewel underneath the pop up."
      hintMessage="Pop ups can be closed by clicking the X in the top right corner."
      dialogMessage="Your mission is complete! Pop ups can always be closed by clicking the X, but some sites also let you click anywhere else on the page to get rid of them. Click the X to receive your next mission."
      correctMoves={correctMoves}
    >
      <Container>
        <Dialog
          open={isDialogOpen}
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
          hideBackdrop={true}
        >
          <DialogTitle>
            Lorem ipsum dolor sit amet.
            <IconButton
              id="Navigated away from the pop up by clicking the X to close it."
              style={{
                position: "absolute",
                right: 2,
                top: 2,
                outline: "none",
              }}
              onClick={handleClose}
              color="inherit"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            Pellentesque et augue scelerisque, sodales lacus ac, maximus ante.
            Aliquam pellentesque massa eget varius rhoncus. Phasellus pharetra
            est libero, non porttitor eros iaculis nec. Quisque laoreet justo
            augue, sed pretium nibh hendrerit ut. Sed in sem condimentum,
            sollicitudin odio eu, faucibus ante. Sed ex velit, placerat ut
            tempor sit amet, lacinia eget leo. Nullam blandit et erat non
            imperdiet.
          </DialogContent>
        </Dialog>
        <Jewel top="50%" left="50%" logClick={props.logClick} />
      </Container>
    </Level>
  );
}

// defines the props the component expects
Level2.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
