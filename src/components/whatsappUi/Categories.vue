<script setup lang="ts">
import Category from './Category.vue';
import { useCategoryStore } from '../../stores/CategoryStore';
const categoryStore = useCategoryStore();

// todo come from store
const categories = [
  {
    name: 'All',
    type: 'whitelist',
    matches: [],
    settings: {
      color: 'bg-gray-300'
    }
  },
  {
    name: 'Important',
    // type: 'blacklist',
    type: 'whitelist',
    matches: ['Ian / Tom / Ian', 'Ian / Nat'],
    settings: {
      color: 'bg-red-300'
    }
  }
];
</script>

<template>
  <div class="p-4 text-xs space-y-2">
    <p class="uppercase font-semibold">
      WhatsApp Categories
    </p>
    <div class="flex space-x-2 font-semibold">
      <Category
        v-for="category in categoryStore.getAll"
        :key="category.name"
        :category="category"
      />
    </div>
  </div>
</template>
