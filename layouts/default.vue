<template>
  <div>
    <Navbar />
    <div class="layout">
      <Sidebar />
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from '~/pages/Navbar.vue';
import Jean from '~/pages/Jean.vue';
import Kadin from '~/pages/Kadin.vue';
import Giris from '~/pages/Giris.vue';
import Sepet from '~/pages/Sepet.vue';
import Cart1 from '~/pages/Cart1.vue';
import Cart2 from '~/pages/Cart2.vue';
import Kategori from '~/pages/Kategori.vue';
import Footer from '~/pages/Footer.vue';
import Sidebar from '~/layouts/Sidebar.vue';
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh; /* Tam ekran yüksekliği */
}

main {
  flex: 1;
  padding: 20px;
  overflow-y: auto; /* İçerik uzun olursa kaydırma yapılabilir */
}
</style>
