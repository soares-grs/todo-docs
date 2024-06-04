<template>
  <div>
    <input
      :class="button({ color: props.color })"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup>
import { tv } from "tailwind-variants";

const button = tv({
  base: "p-4 rounded-md shadow-lg outline-none border-spacing-2 border mt-4",
  variants: {
    color: {
      primary: "border-blue-300",
      error: "border-red-300",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const props = defineProps({
  placeholder: {
    type: String,
    default: "Type a new task",
  },
  modelValue: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "primary",
  },
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emits("update:modelValue", event.target.value);
};
</script>
