<template>
  <div class="flex justify-center items-center">
    <div class="flex gap-1 items mt-4">
      <BaseInput v-model="text" />
      <AddTaskButton />
    </div>
  </div>
</template>

<script setup>
import BaseInput from "./components/BaseInput.vue";
import AddTaskButton from "./components/AddTaskButton.vue";
</script>
