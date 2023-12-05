/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({ stateProp, type, className, text = "Live &lt;~&gt;", text1 = "Demo |&gt;" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "primary",
  });

  return (
    <div
      className={`button ${state.type} state-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="live">
        {state.type === "primary" && <>{text}</>}

        {state.type === "secondary" && <>{text1}</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Button.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
