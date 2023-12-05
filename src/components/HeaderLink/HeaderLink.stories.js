import { HeaderLink } from ".";

export default {
  title: "Components/HeaderLink",
  component: HeaderLink,
  argTypes: {
    stateProp: {
      options: ["hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    className: {},
    text: "home",
  },
};
