import React from "react";
import "./FlexBox.css";

function FlexBox(props) {
  return (
    <div className="container">
      <div className="box-1">
        {props.sticks} {props.heads} {props.band}
      </div>
    </div>
  );
}

export default FlexBox;
