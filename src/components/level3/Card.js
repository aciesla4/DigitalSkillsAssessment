import React from "react";

// Component for the picture cards used in Level 3
export default function Card(props) {
  const { pic } = props;
  return (
    <div>
      <input
        id={"level 3 card " + props.id}
        className="card"
        type="image"
        alt="pic"
        src={pic}
        onClick={props.onClick}
      />
    </div>
  );
}
