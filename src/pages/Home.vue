
<script setup lang="ts">
import CategoryLabel from '../components/CategoryLabel.vue';
import Heading from '../components/ui/Heading.vue';
import Pencil from '../components/ui/icon/Pencil.vue';
import { useCategoryStore } from '../stores/CategoryStore';
const categoryStore = useCategoryStore();
</script>

<template>
  <Heading>Categories</Heading>

  <div
    v-for="category in categoryStore.getAll"
    :key="category.id"
    class="flex justify-between"
  >
    <CategoryLabel :category="category" />
    <router-link :to="`/category/edit/${category.id}`">
      <Pencil class="w-6" />
    </router-link>
  </div>
</template>