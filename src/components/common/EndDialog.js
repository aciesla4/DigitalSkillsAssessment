import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMoves } from "../../redux/slices/jewelSlice";
import PropTypes from "prop-types";

// Component for the dialog that shows up at the end of each level
export default function EndDialog(props) {

  const moves = useSelector(selectMoves);
  let index = 0;

  return (
    <Dialog open={props.open} disableBackdropClick={true}>
      <DialogTitle>
        Congratulations Agent!
        <IconButton
          id="close end dialog button"
          style={{ position: "absolute", right: 2, top: 2 }}
          component={RouterLink}
          to={`/level${props.level + 1}`}
          onClick={() => props.handleCloseDialog()}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {props.academicmode ? (
        <DialogContent dividers>
          {props.children}
          <h3>Your Moves</h3>
          <ol>{moves.payload? moves.payload.map((move) => <li key={index++}>{move}</li>) : []}</ol>
          <h3>Our Moves</h3>
          {props.correctMoves}
        </DialogContent>
      ) : (
        <DialogContent dividers>
          Your mission is complete! Click the X to receive your next mission.
        </DialogContent>
      )}
    </Dialog>
  );
}

// defines the props the component expects
EndDialog.propTypes = {
  open: PropTypes.bool,               // boolean for whether the dialog is open or not
  level: PropTypes.number,            // integer for which level the user is on
  handleCloseDialog: PropTypes.func,  // function for handling when the dialog is closed
  academicMode: PropTypes.bool,       // boolean for if the game is in academic mode or not
}
