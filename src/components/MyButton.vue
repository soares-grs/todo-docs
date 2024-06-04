<template>
    <div>
        <button class="p-4 bg-blue-400 rounded-md text-white">{{ message }}</button>        
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    }
})

const message = computed(() => props.isActive ? "Click me" : "Dont click me");

</script>
