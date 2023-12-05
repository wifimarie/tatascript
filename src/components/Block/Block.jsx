/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Block = ({
  className,
  text = "Languages",
  text1 = "TypeScript",
  text2 = "Lua",
  text3 = "Python",
  hasDiv = true,
}) => {
  return (
    <div className={`block ${className}`}>
      <div className="languages-wrapper">
        <div className="languages">{text}</div>
      </div>
      <img className="line" alt="Line" src="/img/line-13-4.svg" />
      <div className="frame-2">
        <div className="frame-3">
          <div className="text-wrapper-2">{text1}</div>
          <div className="text-wrapper-2">{text2}</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-2">{text3}</div>
          {hasDiv && <div className="text-wrapper-2">JavaScript</div>}
        </div>
      </div>
    </div>
  );
};

Block.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  hasDiv: PropTypes.bool,
};
