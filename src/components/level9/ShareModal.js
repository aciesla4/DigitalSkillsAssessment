import React from "react";
import "../../css/ShareModal.css";
import Certificate from "../../images/certificate.png";

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
