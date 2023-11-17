import React from "react";
import "./Button1.css";
import My from "../../assets/images/Googlelogo.png"
const Button1 = (props) => {
  const { onClick, label, disabled = false, className, type } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
 
        <img src={My} alt="logo" className="g-logo" />
      {label}
      
    </button>
  );
};

export default Button1;