<script setup lang="ts">
import Cog from './components/ui/icon/Cog.vue';
import Buttton from './components/ui/Buttton.vue';

</script>

<template>
  <div class="w-[500px] p-6 space-y-4">
    <div class="flex items-center space-x-4 justify-between">
      <h1 class="text-xl font-semibold">
        WhatsApp Categories
      </h1>
      <div class="flex items-center space-x-4">
        <router-link
          class="flex-none"
          to="/category/add"
        >
          <Buttton>Add Category</Buttton>
        </router-link>
        <router-link
          class="flex-none"
          to="/settings"
        >
          <Cog class="w-8" />
        </router-link>
      </div>
    </div>
    <router-view />
    <!-- add multiple categories with inclusion or exclusion
    add settings to display a default category
    categories should be in a dropdown -->
  </div>
</template>
