<template>
    <h2>POPÜLER ÜRÜNLER</h2>
    <div class="products">

        <div class="product-column">
            <div v-for="(product, index) in products.slice(0, 4)" :key="index" class="product-card">
                <img :src="product.image" :alt="product.name" />
                <div class="product-info">
                    <h3>{{ product.name }}</h3>
                    <div class="price-info">
                        <span class="old-price">{{ product.oldPrice }} TL</span>
                        <span class="current-price">{{ product.price }} TL</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-column">
            <div v-for="(product, index) in products.slice(4, 8)" :key="index" class="product-card">
                <img :src="product.image" :alt="product.name" />
                <div class="product-info">
                    <h3>{{ product.name }}</h3>
                    <div class="price-info">
                        <span class="old-price">{{ product.oldPrice }} TL</span>
                        <span class="current-price">{{ product.price }} TL</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

// Ürünlerin listesi
const products = ref([
    { name: 'Vanetta Broek', price: '712.49', oldPrice: '949.99', image: '/assets/images/product-1.jpg' },
    { name: 'Enrico Low Waist Skinny Super Slim Jeans', price: '349.99', oldPrice: '1249.99', image: '/assets/images/product-2.jpg' },
    { name: 'Düz Dik Yaka Yarım Fermuarlı Regular Fit Lacivert Sweatshirt', price: '629.99', oldPrice: '899.99', image: '/assets/images/product-3.jpg' },
    { name: 'Wanda High Waist Straight Leg Straight', price: '712.49', oldPrice: '949.99', image: '/assets/images/product-4.jpg' },
    { name: 'Vanetta Broek', price: '712.49', oldPrice: '949.99', image: '/assets/images/product-5.jpg' },
    { name: 'Hollywood Y Mid Waits Straight Leg Straight Jeans', price: '937.49', oldPrice: '1249.99', image: '/assets/images/product-6.jpg' },
    { name: 'Vionne H Broek', price: '712.49', oldPrice: '949.99', image: '/assets/images/product-7.jpg' },
    { name: 'Wanda High Waist Straight Leg Straight Jeans', price: '712.49', oldPrice: '949.99', image: '/assets/images/product-8.jpg' },
]);
</script>


<style scoped>
h2 {
    font-family: 'Mulish', sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: black;
    padding-top: 10px; /* Başlık altındaki boşluk */
    margin-left: 40px;
}

.products {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    flex-direction: row;
}

.product-column {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* Kartlar arasındaki boşluğu küçülttük */
}

.product-card {
    display: flex;
    background-color: #fff;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    align-items: center;
    gap: 10px;
    transform: scale(0.9);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    cursor: pointer;
}

/* Hover durumunda kart sadece yukarı hareket eder ve gölge artar */
.product-card:hover {
    transform: translateY(-5px); /* Kart sadece yukarı hareket eder */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Gölgeyi arttırıyoruz */
}

.product-card img {
    max-width: 60px;
    /* Resmin boyutunu küçülttük */
    height: auto;
    border-radius: 4px;
}

.product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    height: 100%;
}

.product-info h3 {
    margin: 0;
    font-size: 0.9rem;
    /* Yazı boyutunu küçülttük */
    align-self: flex-start;
}

.price-info {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
    /* Fiyat bilgilerinin arasındaki boşluğu küçülttük */
}

.old-price {
    text-decoration: line-through;
    color: #999;
    font-size: 0.8rem;
    /* Eski fiyat yazı boyutunu küçülttük */
}

.current-price {
    font-weight: bold;
    color: #333;
    font-size: 0.9rem;
    /* Yeni fiyat yazı boyutunu küçülttük */
}
</style>