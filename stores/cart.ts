import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ id: number; name: string; price: number }>, // Sepetteki ürünler
  }),
  getters: {
    cartCount: (state) => state.items.length, // Sepetteki ürün sayısı
  },
  actions: {
    addToCart(item: { id: number; name: string; price: number }) {
      this.items.push(item); // Ürünü sepete ekle
    },
    removeFromCart(itemId: number) {
      this.items = this.items.filter((item) => item.id !== itemId); // Ürünü sepetten çıkar
    },
  },
});
