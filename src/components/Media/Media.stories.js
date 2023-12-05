import { Media } from ".";

export default {
  title: "Components/Media",
  component: Media,
  argTypes: {
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    className: {},
    text: "@elias",
  },
};
