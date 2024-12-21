import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../components/Navbar.vue'; // Navbar sayfası
import Jean from '../components/Jean.vue'; // Jean sayfası
import Kadin from '../components/Kadin.vue';
import Giris from '../components/Giris.vue';
import Sepet from '../components/Sepet.vue';
import Cart1 from '~/components/Cart1.vue';
import Cart2 from '~/components/Cart2.vue';
import Kategori from '~/components/Kategori.vue';
import Footer from '~/components/Footer.vue';
import Banner from '~/components/Banner.vue';

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
  {
    path: '/footer',
    name: 'Footer',
    component: Footer,
  },
  {
    path: '/banner',
    name: 'Banner',
    component: Banner,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
