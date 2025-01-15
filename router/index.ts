import { createRouter, createWebHistory } from 'vue-router';
import index from '~/pages/index.vue';
import Navbar from '../components/Navbar.vue'; // Navbar sayfası
import Jean from '../components/Jean.vue'; // Jean sayfası
import Kadin from '../components/Kadin.vue';
import Giris from '../pages/Giris.vue';
import Sepet from '../pages/Sepet.vue';
import Cart1 from '~/components/Cart1.vue';
import Cart2 from '~/components/Cart2.vue';
import Kategori from '~/components/Kategori.vue';
import KadinJean from '~/pages/KadinJean.vue';
// Banner ve Footer sadece ana sayfalarda kullanılacak, bu yüzden burada tanımlamıyoruz
// import Footer from '~/components/Footer.vue';
// import Banner from '~/components/Banner.vue';

const routes = [
  {
    path: '/',
    name: 'index', // Ana sayfa ismi
    component: index, // Ana sayfa bileşeni
  },
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
    path: '/Giris',
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
    path: '/kadin-jean',
    name: 'KadinJean',
    component: () => import('~/pages/KadinJean.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
