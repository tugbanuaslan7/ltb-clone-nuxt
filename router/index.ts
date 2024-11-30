import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Navbar from '../pages/Navbar.vue';
import Home from '../pages/index.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home }, // Ana sayfa route'u
  { path: '/navbar', name: 'Navbar', component: Navbar },
  // Diğer componentler
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;