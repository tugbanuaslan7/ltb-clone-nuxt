import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../pages/Navbar.vue'; // Navbar sayfası
import Jean from '../pages/Jean.vue'; // Jean sayfası
import Kadin from '../pages/Kadin.vue';
import Giris from '../pages/Giris.vue';
import Sepet from '../pages/Sepet.vue';

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
  {
    path: '/kadin',
    name: 'Kadin',
    component: Kadin,
  },
  {
    path: '/giris',
    name: 'Giris',
    component: Giris,
  },
  {
    path: '/sepet',
    name: 'Sepet',
    component: Sepet,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
