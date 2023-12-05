/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Discord1 } from "../../icons/Discord1";
import { Figma3 } from "../../icons/Figma3";
import { Github2 } from "../../icons/Github2";
import { Logo } from "../Logo";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <img className="line-2" alt="Line" src="/img/line-11.svg" />
      <div className="frame-7">
        <div className="frame-8">
          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-11">
                <Logo className="logo-instance" style="default" />
                <div className="text-wrapper-4">Elias</div>
              </div>
              <div className="text-wrapper-5">elias@elias-dev.ml</div>
            </div>
            <p className="p">Web designer and front-end developer</p>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-6">Media</div>
            <div className="group">
              <Github2 className="github" />
              <Figma3 className="figma" />
              <Discord1 className="discord" />
            </div>
          </div>
        </div>
        <p className="text-wrapper-7">© Copyright 2022. Made by Elias</p>
      </div>
    </div>
  );
};
