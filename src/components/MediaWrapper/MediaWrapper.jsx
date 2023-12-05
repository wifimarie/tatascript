/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Dribble2 } from "../../icons/Dribble2";
import { Figma3 } from "../../icons/Figma3";
import { Github2 } from "../../icons/Github2";
import "./style.css";

export const MediaWrapper = ({ className }) => {
  return (
    <div className={`media-wrapper ${className}`}>
      <img className="line-stroke-2" alt="Line stroke" src="/img/line-10-stroke.svg" />
      <div className="frame-16">
        <Github2 className="icon-instance-node" />
        <Dribble2 className="icon-instance-node" />
        <Figma3 className="icon-instance-node" />
      </div>
    </div>
  );
};
