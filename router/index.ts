import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../pages/Navbar.vue'; // Navbar sayfası
import Jean from '../pages/Jean.vue'; // Jean sayfası

const routes = [
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar,
  },
  {
    path: '/jean',
    name: 'Jean',
    component: Jean,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
