/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Project = ({
  className,
  rectangle = "/img/rectangle-22-2.png",
  text = "HTML",
  text1 = "SCSS",
  text2 = "Python",
  hasDiv = true,
  text3 = "ChertNodes",
  text4 = "Minecraft servers hosting",
  visible = true,
}) => {
  return (
    <div className={`project ${className}`}>
      <img className="rectangle" alt="Rectangle" src={rectangle} />
      <div className="frame-4">
        <div className="text-wrapper-3">{text}</div>
        <div className="text-wrapper-3">{text1}</div>
        <div className="text-wrapper-3">{text2}</div>
        {hasDiv && <div className="text-wrapper-3">Flask</div>}
      </div>
      <div className="frame-5">
        <div className="chert-nodes">{text3}</div>
        <div className="minecraft-servers">{text4}</div>
        <div className="frame-6">
          <Button className="button-instance" stateProp="default" text="Live &lt;~&gt;" type="primary" />
          {visible && <Button className="button-instance" stateProp="default" text1="Cached &gt;=" type="secondary" />}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasDiv: PropTypes.bool,
  text3: PropTypes.string,
  text4: PropTypes.string,
  visible: PropTypes.bool,
};
