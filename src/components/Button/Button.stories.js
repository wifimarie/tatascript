import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    type: "primary",
    className: {},
    text: "Live &lt;~&gt;",
    text1: "Demo |&gt;",
  },
};
