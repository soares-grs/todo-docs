<template>
  <div class="p-4 w-1/3 rounded-md shadow-lg border border-spacing-2 border-blue-200">
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>
