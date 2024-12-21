<template>
    <div class="container">
      <!-- Sepet İkonu ve Sayaç -->
      <div class="buton">
        <i class="bi bi-cart"></i>
        <span class="cart-count">{{ cartCount }}</span> <!-- Sayaç burada dinamik olacak -->
      </div>
  
      <h3 v-if="cartCount === 0">Sepetinizde ürün bulunmamaktadır.</h3>
      <h3 v-else>Sepetinizde {{ cartCount }} ürün bulunmaktadır.</h3> <!-- Sepette ürün var ise miktarı gösterir -->
  
      <div class="buton">
        <button class="shopping-button">Alışverişe Başla</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartCount: 0,  // Sepetteki ürün sayısını dinamik olarak başlatıyoruz
      };
    },
    methods: {
      // Sepete ürün ekleme fonksiyonu
      addToCart() {
        this.cartCount += 1;  // Sepetteki ürün sayısını arttır
      },
      // Sepetten ürün çıkarma fonksiyonu
      removeFromCart() {
        if (this.cartCount > 0) {
          this.cartCount -= 1;  // Sepetteki ürün sayısını azalt
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center; /* Başlık ve butonları ortalar */
    font-family: 'Mulish', sans-serif;
    padding-bottom: 100px; 
    padding-right: 100px;
  }
  
  .buton {
    position: relative; /* Konumlandırma için relative kullanıyoruz */
  }
  
  .buton i {
    font-size: 60px; /* İkon boyutunu burada ayarlıyoruz */
  }
  
  .cart-count {
    position: absolute;
    top: -5px;  /* Sayaç, ikonun üst kısmında olacak */
    right: -5px;  /* Sayaç, ikonun sağ kısmında olacak */
    background-color: red;  /* Sayaç arka planı */
    color: white;  /* Sayaç yazı rengi */
    width: 25px;  /* Sayaç genişliği */
    height: 25px;  /* Sayaç yüksekliği */
    border-radius: 50%;  /* Yuvarlak şekil */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;  /* Sayaç yazı boyutu */
    font-weight: bold;
  }
  
  .shopping-button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin-top: 40px;
    font-weight: bold;
    letter-spacing: 0.4px;
    width: 330px;
    height: 55px;
    transition: all 0.4s ease;
    box-sizing: border-box; /* Kenar boşluklarını genişlikten hariç tut */
    border: none;
  }
  
  .shopping-button:hover {
    background-color: red;
  }
  
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 20px 0;
    letter-spacing: 0.4px;
  }
  </style>
  