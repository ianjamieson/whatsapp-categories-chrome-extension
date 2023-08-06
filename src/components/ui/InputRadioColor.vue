<script setup lang="ts">
const props = defineProps<{
  color: string,
  modelValue?: string
}>();
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label>
    <input
        type="radio"
        name="color"
        class="hidden peer"
        :value="props.modelValue"
        :checked="props.modelValue === props.color"
        @input="emit('update:modelValue', $event?.target?.value)"
    >
    <div
        class="w-6 h-6 rounded-full cursor-pointer
        opacity-50 hover:opacity-100 transition duration-700
        peer-checked:opacity-100 peer-checked:border-2 border-gray-400"
        :class="props.color">
    </div>
  </label>
</template>