<template>
  <div class="white-page">
    <div class="content">
        <span class="cart-count">{{ cartStore.cartCount }}</span> <!-- Sayaç burada dinamik olacak -->
      </div>

      <h3 v-if="cartStore.favoritesCount === 0">Favorilerinizdenizde ürün bulunmamaktadır.</h3>
      <h3 v-else>Favorilerinizde {{ cartStore.favoritesCount }} ürün bulunmaktadır.</h3>


      <div v-for="favorites in cartStore.favorites" :key="favorites.id" class="cart-item">
        <p>{{ favorites.name }}</p>
        <button @click="removeFavorites(favorites.id)">Kaldır</button>
      </div>

    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import { defineComponent } from 'vue';

const cartStore = useCartStore();

const removeFavorites = (itemId: number) => {
      cartStore.removeFromFavorites(itemId); // Sepetten ürün çıkar
    };
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: 'Mulish', sans-serif;
  padding-bottom: 100px;
  padding-right: 100px;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
}


h3 {
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 20px 0;
  letter-spacing: 0.4px;
}
</style>