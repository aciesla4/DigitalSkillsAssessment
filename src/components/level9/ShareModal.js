import React from "react";
import "../../css/ShareModal.css";
import Certificate from "../../images/certificate.png";
import PropTypes from "prop-types";

// Component for the modal used in Level 9
export default function ShareModal(props) {
  return (
    props.show && (
      <div className="share-modal" style={{ left: "33%", bottom: "25%" }}>
        <div className="share-modal-title">
          <h2>Share on Facebook</h2>
        </div>
        <div className="content">
          <span className="avatar" style={{ backgroundColor: "black" }} />
          Agent
          <br />
          <br />
          Say something about this...
          <br />
          <img
            style={{ height: "200px", width: "500px" }}
            alt="certificate"
            src={Certificate}
          />
        </div>
        <button
          className="share-button"
          id="level 9 close facebook modal button"
          onClick={(e) => props.onClick(e)}
        >
          Post to Facebook
        </button>
      </div>
    )
  );
}

// defines the props the component expects
ShareModal.propTypes = {
    show: PropTypes.bool,       // boolean for if the modal is shown or not
    onClick: PropTypes.func,    // function that handles when the share button is clicked
}
