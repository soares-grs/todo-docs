import AddTaskButton from "../components/AddTaskButton.vue";

export default {
  component: AddTaskButton,
  tags: ["autodocs"],
};

export const Enable = {
  args: {
    isEnable: true,
  },
};

export const Disabled = {
  args: {
    isEnable: false,
  },
};
