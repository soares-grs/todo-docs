import BaseInput from "../components/BaseInput.vue";

export default {
  component: BaseInput,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "error"],
      control: { type: "select" },
    },
  },
};

export const Primary = {};

export const Error = {
  args: {
    color: "error",
  },
};
