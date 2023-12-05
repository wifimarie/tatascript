/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const H = ({ className, text = "projects", lineStroke = "/img/line-7-stroke.svg" }) => {
  return (
    <div className={`h ${className}`}>
      <div className="div">
        <div className="text-wrapper">#</div>
        <div className="projects">{text}</div>
      </div>
      <img className="line-stroke" alt="Line stroke" src={lineStroke} />
    </div>
  );
};

H.propTypes = {
  text: PropTypes.string,
  lineStroke: PropTypes.string,
};
