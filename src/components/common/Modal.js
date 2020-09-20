import React from "react";
import "../../css/Modal.css";
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PropTypes from "prop-types";

// Component for a generic modal to hold introduction messages and hints
export default function Modal(props) {
    // gets the x and y coordinates and left, right, or center modal from props
  const { x, y, modalStyle } = props;
  const styles = {
    modal: {
      left: x,
      bottom: y,
    },
  };

  return (
    props.show && (
      <div className={modalStyle} style={styles.modal}>
        <div>
          <h2 className="modal-title">{props.heading}</h2>
          {props.last ? (
            <IconButton
              style={{ position: "absolute", right: 0, top: 0 }}
              id="close modal button"
              onClick={props.closeModal}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              style={{ position: "absolute", right: 0, top: 0 }}
              id="open next modal button"
              onClick={props.openNext}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}
        </div>
        <div className="content">{props.children}</div>
      </div>
    )
  );
}

// defines the props the component expects
Modal.propTypes = {
    x: PropTypes.number,            // number that specifies the x position of the modal
    y: PropTypes.number,            // number that specifies the y position of the modal
    modalStyle: PropTypes.string,   // string that specifies if the modal is on the left or right, or in the center
    show: PropTypes.bool,           // boolean for if the modal should be shown
    heading: PropTypes.string,      // string that holds the heading for the modal
}
