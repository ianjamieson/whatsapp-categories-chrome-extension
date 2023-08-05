import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import CategoryAdd from './pages/CategoryAdd.vue';
import CategoryEdit from './pages/CategoryEdit.vue';
import Home from './pages/Home.vue';
import Settings from './pages/Settings.vue';

const pinia = createPinia();
const app = createApp(App);

const routes = [
  { path: '/', component: Home },
  { path: '/category/add', component: CategoryAdd },
  { path: '/category/edit/:id', component: CategoryEdit },
  { path: '/settings', component: Settings },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(pinia);
app.use(router);
app.mount('#app');
