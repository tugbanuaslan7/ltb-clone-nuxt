<template>
  <SepetNavbar />
  <div class="container">
    <!-- Sepet İkonu ve Sayaç -->
    <div class="buton">
      <i class="bi bi-cart"></i>
      <span class="cart-count">{{ cartStore.cartCount }}</span> <!-- Sayaç burada dinamik olacak -->
    </div>

    <h3 v-if="cartStore.cartCount === 0">Sepetinizde ürün bulunmamaktadır.</h3>
    <h3 v-else>Sepetinizde {{ cartStore.cartCount }} ürün bulunmaktadır.</h3> <!-- Sepette ürün var ise miktarı gösterir -->

    <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
      <p>{{ item.name }} - {{ item.price }}₺</p>
      <button @click="removeItem(item.id)">Kaldır</button>
    </div>

    <div class="buton">
      <button class="shopping-button" @click="goToHome">Alışverişe Başla</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '~/stores/cart';
import { defineComponent } from 'vue';
import SepetNavbar from '~/layouts/SepetNavbar.vue';

export default defineComponent({
  components: {
    SepetNavbar
  },
  setup() {
    const cartStore = useCartStore();

    const goToHome = () => {
      // Ana sayfaya yönlendirme
      window.location.href = '/';
    };

    const removeItem = (itemId: number) => {
      cartStore.removeFromCart(itemId); // Sepetten ürün çıkar
    };

    return { cartStore, goToHome, removeItem };
  }
});
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

.buton {
  position: relative;
}

.buton i {
  font-size: 60px;
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
  box-sizing: border-box;
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
