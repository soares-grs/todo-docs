import MyButton from "../components/MyButton.vue";

export default {
  component: MyButton,
};

export const Active = {
    args: {
      isActive: true
    },
  };

  export const Inactive = {
    args: {
      isActive: false
    },
  };

