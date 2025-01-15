// stores/productsStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { collection, getDocs, query, where, QuerySnapshot } from 'firebase/firestore';

interface Product {
  name: string;
  description: string;
  imageUrl: string;
}

export const useProducts = defineStore('products', () => {
  const { $db } = useNuxtApp();
  const products = ref<Product[]>([]);
  const searchQuery = ref<string>('');

  // Firestore'dan ürünleri çekme
  const fetchProducts = async () => {
    const q = query(collection($db, 'products')); // 'products' koleksiyonunu çekiyoruz
    const querySnapshot = await getDocs(q);
    products.value = querySnapshot.docs.map(doc => doc.data() as Product);
  };

  // Arama fonksiyonu
  const searchProducts = async () => {
    if (searchQuery.value.trim() === '') {
      return fetchProducts(); // Eğer arama kutusu boşsa, tüm ürünleri getir
    }

    const q = query(
      collection($db, 'products'),
      where('name', '>=', searchQuery.value),
      where('name', '<=', searchQuery.value + '\uf8ff') // Firebase alfanümerik sıralama
    );
    const querySnapshot: QuerySnapshot = await getDocs(q);
    products.value = querySnapshot.docs.map(doc => doc.data() as Product);
  };

  return {
    products,
    searchQuery,
    fetchProducts,
    searchProducts
  };
});
