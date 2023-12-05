import { LanguageSwitcher } from ".";

export default {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
  argTypes: {
    stateProp: {
      options: ["open", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "open",
    className: {},
  },
};
