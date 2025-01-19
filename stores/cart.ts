import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ id: number; name: string; price: number }>, // Sepetteki ürünler
    favorites: [] as Array<{ id: number; name: string; price: number }>, // Favori ürünler
  }),
  getters: {
    cartCount: (state) => state.items.length, // Sepetteki ürün sayısı
    favoritesCount: (state) => state.favorites.length, // Favorilerdeki ürün sayısı
  },
  actions: {
    addToCart(item: { id: number; name: string; price: number }) {
      this.items.push(item); // Ürünü sepete ekle
    },
    removeFromCart(itemId: number) {
      this.items = this.items.filter((item) => item.id !== itemId); // Ürünü sepetten çıkar
    },
    addToFavorites(item: { id: number; name: string; price: number }) {
      if (!this.favorites.find((favorite) => favorite.id === item.id)) {
        this.favorites.push(item); // Ürünü favorilere ekle
      }
    },
    removeFromFavorites(itemId: number) {
      this.favorites = this.favorites.filter((item) => item.id !== itemId); // Ürünü favorilerden çıkar
    },
  },
});
