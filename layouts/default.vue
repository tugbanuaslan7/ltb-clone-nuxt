<template>
  <div>
    <Navbar v-if="$route.name !== 'Sepet'" />
    
    <main>
      <NuxtPage />
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
.layout {
  display: flex;
  height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

footer {
  background-color: #f8f8f8;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #666;
  border-top: 1px solid #ddd;
}

.banner {
  background-color: #e3f2fd;
  text-align: center;
  padding: 15px 0;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #ccc;
}
</style>