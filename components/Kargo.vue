<template>
    <div class="white-page">
      <div class="content">
        <!-- İçeriğiniz buraya gelecek -->

      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Script gerekli değilse boş bırakılabilir.
  </script>
  
  <style scoped>
  .white-page {
    background-color: white; /* Beyaz arka plan */
    height: 300px; /* Sayfanın tamamını kaplar */
    width: auto; /* Sayfanın tamamını kaplar */

    display: flex;
    justify-content: center; /* İçeriği yatay ortala */
    align-items: center; /* İçeriği dikey ortala */
  }
  
  .content {
    text-align: center; /* İçeriği ortalamak için */
  }
  </style>
  