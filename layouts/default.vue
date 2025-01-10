<template>
  <div>
    <Navbar v-if="$route.name !== 'Sepet'" />
    
    <main>
      <NuxtPage />
      <ProductCarousel />

      
    </main>

    <!-- Banner sadece belirli sayfalarda görüntülenecek -->
    <Banner v-if="shouldShowBanner" />

    <!-- Footer sadece belirli sayfalarda görüntülenecek -->
    <Footer v-if="shouldShowFooter" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import Banner from '~/components/Banner.vue';
import ProductCarousel from '~/components/ProductCarousel.vue';

// Aktif rotayı almak için `useRoute` kullanıyoruz
const route = useRoute();

// Banner'ın görüntüleneceği sayfaları belirliyoruz
const allowedRoutesForBanner = ['index'];

// Footer'ın görüntüleneceği sayfaları belirliyoruz
const allowedRoutesForFooter = ['index'];

// Aktif sayfanın Banner ve Footer için uygun olup olmadığını kontrol ediyoruz
const shouldShowBanner = computed(() =>allowedRoutesForBanner.includes(route.name));
const shouldShowFooter = computed(() =>allowedRoutesForFooter.includes(route.name));

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
