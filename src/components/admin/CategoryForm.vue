<script setup lang="ts">
import Buttton from '../../components/ui/Buttton.vue';
import Input from '../../components/ui/Input.vue';
</script>
<template>
  <form action="">
    <div>
      <label>Name</label>
      <Input />
    </div>
  </form>

  <div class="flex justify-between">
    <router-link to="/">
      <Buttton>Cancel</Buttton>
    </router-link>
    <Buttton color="primary">
      Add
    </Buttton>
  </div>
</template>