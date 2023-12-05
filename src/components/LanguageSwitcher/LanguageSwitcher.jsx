/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const LanguageSwitcher = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`language-switcher ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper-9">EN</div>
      <div className={`overlap-group-wrapper ${state.state}`}>
        <div className="overlap-group-2">
          <img
            className="line-3"
            alt="Line"
            src={state.state === "open" ? "/img/line-14-1.svg" : "/img/line-14-2.svg"}
          />
          <img
            className="line-4"
            alt="Line"
            src={state.state === "open" ? "/img/line-15-1.svg" : "/img/line-15-2.svg"}
          />
        </div>
      </div>
      <div className={`frame-13 state-${state.state}`}>
        <div className="text-wrapper-10">RU</div>
        <div className="text-wrapper-11">UA</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "open",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

LanguageSwitcher.propTypes = {
  stateProp: PropTypes.oneOf(["open", "default"]),
};
