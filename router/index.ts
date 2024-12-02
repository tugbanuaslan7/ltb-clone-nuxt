import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../pages/Navbar.vue'; // Navbar sayfası
import Jean from '../pages/Jean.vue'; // Jean sayfası
import Kadin from '../pages/Kadin.vue';
import Giris from '../pages/Giris.vue';
import Sepet from '../pages/Sepet.vue';
import Cart1 from '~/pages/Cart1.vue';
import Cart2 from '~/pages/Cart2.vue';
import Kategori from '~/pages/Kategori.vue';

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
  {
    path: '/cart1',
    name: 'Cart1',
    component: Cart1,
  },
  {
    path: '/cart2',
    name: 'Cart2',
    component: Cart2,
  },
  {
    path: '/kategori',
    name: 'Kategori',
    component: Kategori,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
