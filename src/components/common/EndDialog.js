import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";

// Component for the dialog that shows up at the end of each level
export default function EndDialog(props) {
  return (
    <Dialog open={props.open} disableBackdropClick={true}>
      <DialogTitle>
        Congratulations Agent!
        <IconButton
          id="close end dialog button"
          style={{ position: "absolute", right: 2, top: 2 }}
          component={RouterLink}
          to={`/level${props.level + 1}`}
          onClick={(e) => props.handleCloseDialog(e)}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {props.academicmode ? (
        <DialogContent dividers>{props.children}</DialogContent>
      ) : (
        <DialogContent dividers>
          Your mission is complete! Click the X to return to the home page and
          receive your next mission.
        </DialogContent>
      )}
    </Dialog>
  );
}
