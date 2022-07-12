import React from "react";
import "./Feature.css";
import whiteTick from "../../../assets/whiteTick.png";
const Feature = ({ feature }) => {
  return (
    <div className="feature">
      <img src={whiteTick} alt="" />
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
