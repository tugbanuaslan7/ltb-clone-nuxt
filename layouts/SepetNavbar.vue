<template>
    <nav class="SepetNavbar">
      <div class="logo">
        <img src="/assets/images/ltb-logo.png" alt="LTB Logo" />
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
    name: 'SepetNavbar',
  }
  </script>
  
  <style scoped>
  .SepetNavbar {
  display: flex;
  justify-content: center; /* Logoyu ortalar */
  align-items: center;
  height: 70px;
  background-color: #fff;
  border-bottom: 2px solid #ded7d7; /* Alt çizgi */
  padding-top: 20px;
  padding-bottom: 30px;
}

.logo img {
  height: 50px;
  width: auto;
}
  </style>
  