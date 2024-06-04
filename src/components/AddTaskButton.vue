<template>
  <div>
    <button :disabled="!isEnable" :class="button({ color: colorByStatus })">
      Add
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { tv } from "tailwind-variants";

const button = tv({
  base: "p-4 rounded-md text-white transition duration-100 ease-in",
  variants: {
    color: {
      primary: "bg-blue-400 hover:bg-blue-300",
      disabled: "bg-blue-300  hover:bg-blue-200 cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const props = defineProps({
  isEnable: {
    type: Boolean,
    default: false,
  },
});

const colorByStatus = computed(() => (props.isEnable ? "primary" : "disabled"));
</script>
