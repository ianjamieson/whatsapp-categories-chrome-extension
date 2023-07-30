import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import Categories from './Categories.vue';

const pinia = createPinia();
const app = createApp(Categories);

app.use(pinia);
app.mount('#app');
