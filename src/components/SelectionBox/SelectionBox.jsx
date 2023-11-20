import React from "react";
import "./SelectionBox.css";

const SelectBoxItem = ({
  title = "title",
  selected = false,
  style,
  onClick,
}) => {
  return (
    <div className="selected-item" style={style} onClick={onClick}>
      <h1>{title}</h1>
      <br />
      <div>
        <span>{selected ? "Added" : "Add"}</span>
      </div>
    </div>
  );
};

export default SelectBoxItem;