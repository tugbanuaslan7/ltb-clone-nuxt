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
import Navbar from '~/pages/Navbar.vue'; // Navbar doğru bir dizinde
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
