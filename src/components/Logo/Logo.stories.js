import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    style: {
      options: ["outline", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "outline",
    className: {},
    overlapGroupClassName: {},
    unionClassName: {},
    union: "/img/union-9.svg",
    unionClassNameOverride: {},
    img: "/img/union-8.svg",
  },
};
