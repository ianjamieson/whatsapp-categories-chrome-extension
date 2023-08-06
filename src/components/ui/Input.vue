<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
}>();
const emit = defineEmits(['update:modelValue']);
</script>
<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event?.target?.value)"
    class="border-2 border-gray-300 rounded px-4 py-2 w-full">
</template>