/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Twitter1 } from "../../icons/Twitter1";
import "./style.css";

export const Media = ({
  stateProp,
  className,
  icon = <Twitter1 className="twitter" color="#ABB2BF" />,
  text = "@elias",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`media ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {icon}
      <div className={`elias ${state.state}`}>{text}</div>
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

Media.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
};
