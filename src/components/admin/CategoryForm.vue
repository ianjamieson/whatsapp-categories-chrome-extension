<script setup lang="ts">
import Buttton from '../../components/ui/Buttton.vue';
import Input from '../../components/ui/Input.vue';
import InputRadioColor from '../../components/ui/InputRadioColor.vue';
import FormField from '../../components/ui/FormField.vue';
import { useCategoryStore } from '../../stores/CategoryStore';
import { ref } from 'vue';

const categoryStore = useCategoryStore();
const category = ref({
  name: 'name',
  color: 'bg-red-300',
});
const colors = ['bg-red-300', 'bg-green-300', 'bg-blue-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300'];

</script>
<template>
  <form
    class="space-y-4"
    @submit.prevent=""
  >
    <FormField>
      <label>Name</label>
      <Input v-model="category.name" />
    </FormField>
    <FormField>
      <label>Color</label>
      <div class="flex space-x-4">
        <div
          v-for="color in colors"
          :key="color"
        >
          <InputRadioColor
            v-model="category.color"
            type="radio"
            :value="color"
            :color="color"
          />
        </div>
      </div>
    </FormField>

    <div class="flex justify-between">
      <router-link to="/">
        <Buttton>Cancel</Buttton>
      </router-link>
      <Buttton color="primary">
        Add
      </Buttton>
    </div>
  </form>
</template>