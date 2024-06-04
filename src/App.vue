<template>
  <div class="flex justify-center items-center">
    <TaskForm @add="task => addTask(task)" />
  </div>
  <section class="flex flex-col justify-center items-center mt-5">
    <slot class="w-full" v-for="(task, index) in tasks" :key="index">
      <TaskItem :description="task" />
    </slot>
  </section>
</template>

<script setup>
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskItem from "./components/TaskItem.vue";

const tasks = ref([]);

function addTask(task) {
  tasks.value.push(task);
}

</script>
