import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";

class EndDialog extends React.Component {
  render() {
    console.log(this.props.level);
    return (
      <Dialog open={this.props.open} disableBackdropClick={true}>
        <DialogTitle>
          Congratulations Agent!
          <IconButton
            id="close end dialog button"
            style={{ position: "absolute", right: 2, top: 2 }}
            component={RouterLink}
            to={`/level${this.props.level + 1}`}
            onClick={(e) => this.props.handleCloseDialog(e)}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {this.props.academicmode ? (
          <DialogContent dividers>{this.props.children}</DialogContent>
        ) : (
          <DialogContent dividers>
            Your mission is complete! Click the X to return to the home page and
            receive your next mission.
          </DialogContent>
        )}
      </Dialog>
    );
  }
}

export default EndDialog;
