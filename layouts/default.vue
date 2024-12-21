<template>
  <div>
    <Navbar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
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
</style>