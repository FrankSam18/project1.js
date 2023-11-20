import React from "react";

const ButtonWithButton = () => {
  const handleInnerButtonClick = () => {
    console.log("Inner button clicked!");
  };

  const handleOuterButtonClick = () => {
    console.log("Outer button clicked!");
  };

  return (
    <div>
      <button onClick={handleOuterButtonClick}>Outer Button</button>
      <button onClick={handleInnerButtonClick}>Inner Button</button>
    </div>
  );
};

export default ButtonWithButton;