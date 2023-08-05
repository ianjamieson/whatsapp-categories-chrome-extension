
<script lang="ts" setup>
import { Category } from '../stores/CategoryStore';
import ButtonLabel from './ui/ButtonLabel.vue';
defineProps<{
  category: Category;
}>();
</script>

<template>
  <ButtonLabel :class="{
    [category.color]: true,
}">{{ category.name }}</ButtonLabel>
</template>