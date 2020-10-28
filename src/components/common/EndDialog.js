import React, { useEffect, useState } from "react";
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
import axios from 'axios';
import PropTypes from "prop-types";

// Component for the dialog that shows up at the end of each level
export default function EndDialog(props) {

  const moves = useSelector(selectMoves);
  let index = 0;

  // local state for the time taken to complete the level
  const [levelTime, setLevelTime] = useState(0);

  // converts the level time to minutes and seconds
  function convertToMin(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds === 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }

  const { level, open } = props;

  // hook for getting the total time taken
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://digital-skills-server.herokuapp.com/time/levelTotalTime?level=' + level
    }).then((response) => {
      console.log(response.data);
      setLevelTime(convertToMin(response.data));
    })
  }, [open, level])

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
          <h3>Time Taken: {levelTime}</h3>
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
