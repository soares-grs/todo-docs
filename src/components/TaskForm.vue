<template>
  <div class="flex gap-1 items mt-4">
    <BaseInput v-model="task" />
    <AddTaskButton :is-enable="task.length > 0" @click="addTask(task)" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";
import AddTaskButton from "./AddTaskButton.vue";

const emit = defineEmits(["add"]);

const task = ref("");

function addTask(task) {
  emit("add", task);
}
</script>
