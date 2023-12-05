/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from "../HeaderLink";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Logo } from "../Logo";
import "./style.css";

export const Header = ({ className }) => {
  return (
    <div className={`header ${className}`}>
      <Link className="frame-14" to="/home">
        <Logo className="design-component-instance-node" style="default" />
        <div className="text-wrapper-12">Elias</div>
      </Link>
      <div className="frame-15">
        <HeaderLink className="design-component-instance-node-2" stateProp="active" text="home" to="/home" />
        <HeaderLink className="design-component-instance-node-2" stateProp="default" text="works" />
        <HeaderLink className="design-component-instance-node-2" stateProp="default" text="about-me" />
        <HeaderLink className="design-component-instance-node-2" stateProp="default" text="contacts" />
        <LanguageSwitcher className="design-component-instance-node-2" stateProp="default" />
      </div>
    </div>
  );
};
