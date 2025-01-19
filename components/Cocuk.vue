<template>
    <div class="cocuk-page" >
      
      
  
        <!-- Popup yalnızca "isPopupVisible" doğruysa gösterilecek -->
        <div v-if="isPopupVisible" class="popup">
  
        </div>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Durum değişkeni
  const isPopupVisible = ref(false); // Popup görünür mü?
  
  // Olaylar
  const showPopup = () => {
    isPopupVisible.value = true;
  };
  const hidePopup = () => {
    isPopupVisible.value = false;
  };
  </script>
  
  <style scoped>
  .cocuk-page {
    background-color: white; /* Beyaz arka plan */
    height: 300px; /* Sayfanın tamamını kaplar */
    width: auto; /* Sayfanın tamamını kaplar */

    display: flex;
    justify-content: center; /* İçeriği yatay ortala */
    align-items: center; /* İçeriği dikey ortala */
  }

  
  /* Popup stili */
  .popup {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .popup h3 {
    margin: 0 0 10px 0;
  }
  
  .popup p {
    margin: 0;
  }
  
  </style>
  