<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>


<script lang="ts" setup>
import Sidebar from './layouts/Sidebar.vue';
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  height: 100%;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>