<script setup lang="ts">
const props = withDefaults(defineProps<{
  color: 'primary' | 'secondary'
}>(), {
  color: 'secondary',
});
</script>

<template>
  <button class="border-2  px-4 py-2 rounded font-semibold"
  :class="{
    'border-green-300 bg-green-200': props.color === 'primary',
    'border-gray-300 bg-gray-200': props.color === 'secondary',
  }">
    <slot />
  </button>
</template>