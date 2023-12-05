/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Dots = ({ className, hasFrame = true }) => {
  return (
    <div className={`dots ${className}`}>
      <div className="frame">
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
      <div className="frame">
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
      <div className="frame">
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
      {hasFrame && (
        <div className="frame">
          <div className="ellipse" />
          <div className="ellipse" />
          <div className="ellipse" />
          <div className="ellipse" />
          <div className="ellipse" />
        </div>
      )}

      <div className="frame">
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
    </div>
  );
};

Dots.propTypes = {
  hasFrame: PropTypes.bool,
};
