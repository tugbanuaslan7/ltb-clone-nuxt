<template>
  <div>
    <!-- Navbar tüm sayfalarda görünür, 'Sepet' sayfası hariç -->
    <Navbar v-if="$route.name !== 'Sepet'" />
    
    <main>
      <NuxtPage />
    </main>

    <!-- Ana sayfada tüm bileşenler görüntülenecek -->
    <ProductCarousel v-if="isIndexPage" />
    <Visual v-if="isIndexPage" />
    <Kargo v-if="isIndexPage" />
    <Banner v-if="isIndexPage" />
    <Footer v-if="isIndexPage" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import Banner from '~/components/Banner.vue';
import ProductCarousel from '~/components/ProductCarousel.vue';
import Visual from '~/components/Visual.vue';
import Kargo from '~/components/Kargo.vue';
import KadinJean from '~/pages/KadinJean.vue';

// Aktif rotayı almak için `useRoute` kullanıyoruz
const route = useRoute();

// Ana sayfa kontrolü
const isIndexPage = computed(() => route.name === 'index');
</script>

<style scoped>
main {
  flex: 1;
  padding: 0; /* Tüm paddingleri kaldır */
  overflow-y: auto;
}

.carousel-container {
  width: 100%;
  margin: 0; /* Kenarlardan boşluk kaldır */
  padding: 0; /* Dolgu kaldır */
  position: relative;
}

.carousel-image {
  width: 100%; /* Ekranın tamamını kapla */
  height: auto;
  object-fit: cover;
}

body {
  margin: 0;
  padding: 0;
}

div {
  margin: 0;
  padding: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
