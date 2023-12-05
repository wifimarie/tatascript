/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  style,
  className,
  overlapGroupClassName,
  unionClassName,
  union = "/img/union-9.svg",
  unionClassNameOverride,
  img = "/img/union-8.svg",
}) => {
  return (
    <div className={`logo style-${style} ${className}`}>
      {style === "outline" && (
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <img className={`union ${unionClassName}`} alt="Union" src={union} />
          <img className={`img ${unionClassNameOverride}`} alt="Union" src={img} />
        </div>
      )}
    </div>
  );
};

Logo.propTypes = {
  style: PropTypes.oneOf(["outline", "default"]),
  union: PropTypes.string,
  img: PropTypes.string,
};
