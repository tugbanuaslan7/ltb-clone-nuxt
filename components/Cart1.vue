<template>
    <div class="cart-frame">
        <div class="cart1-wrapper">
            <div class="cart1" @mouseover="startImageRotation" @mouseleave="stopImageRotation"
                @mousemove="handleMouseMove">
                <!-- Sabit Ürün Resmi -->
                <img :src="currentImage" alt="Product Image" class="product-image" />
                <div class="icons">
                    <i class="bi bi-cart" @click="addProductToCart"></i>
                    <i class="bi bi-heart"></i>
                </div>
                <div class="indicators">
                    <span v-for="(image, index) in images" :key="index"
                        :class="['indicator', { active: currentIndex === index }]"></span>
                </div>
                <div class="product-name">{{ product.name }}</div>
                <div class="product-info">
                    <div class="discount">
                        <span>{{ product.discount }}%</span>
                        <span>indirim</span>
                    </div>
                    <span class="vertical-line"></span>
                    <span class="current-price">{{ product.currentPrice }} TL</span>
                    <span class="original-price">{{ product.originalPrice }} TL</span>
                </div>
                <div class="color-indicator"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '~/stores/cart'; // Pinia store import

// Sepet store'una bağlanma
const cartStore = useCartStore();

// Sabit Ürün Verisi
const product = ref({
    id: 1, // Her ürünün benzersiz bir ID'si olmalı
    name: 'Lerana Straight Jean Pantolon',
    discount: 25,
    currentPrice: 712.49,
    originalPrice: 949.99,
    images: [
        '/assets/images/lerana-1.jpg',
        '/assets/images/lerana-2.jpg',
        '/assets/images/lerana-3.jpg',
        '/assets/images/lerana-4.jpg',
        '/assets/images/lerana-5.jpg',
    ],
});

// Sabit Görseller
const images = ref(product.value.images);
const currentIndex = ref(0);
const currentImage = ref(images.value[currentIndex.value]);

let interval;
let lastMouseX = ref(0);
let debounceTimeout;

// Görsel Döndürme Başlatma
const startImageRotation = () => {
    interval = setInterval(() => {
        if (currentIndex.value < images.value.length - 1) {
            currentIndex.value++;
            currentImage.value = images.value[currentIndex.value];
        } else {
            clearInterval(interval); // Son fotoğrafa ulaşıldığında döngüyü durdur
        }
    }, 3000); // 3 saniye
};

// Görsel Döndürme Durdurma
const stopImageRotation = () => {
    clearInterval(interval);
};

// Fare Hareketine Göre Görsel Değiştirme
const handleMouseMove = (event) => {
    clearTimeout(debounceTimeout);
    const direction = event.clientX - lastMouseX.value;
    lastMouseX.value = event.clientX;

    debounceTimeout = setTimeout(() => {
        if (direction > 0 && currentIndex.value < images.value.length - 1) {
            currentIndex.value++;
        } else if (direction < 0 && currentIndex.value > 0) {
            currentIndex.value--;
        }
        currentImage.value = images.value[currentIndex.value];
    }, 300); // 300 milisaniye gecikme
};

// Sepete Ürün Ekleme
const addProductToCart = () => {
    cartStore.addToCart(product.value); // Sepete ürün ekleyin
};
</script>

<style scoped>
.cart1-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.cart1 {
    width: 380px;
    height: auto;
    overflow: visible;
    position: relative;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 30px;
}

.cart-frame {
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border: 2px solid transparent;
    position: relative;
    background-color: transparent;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.2s ease-in-out;
}

.icons {
    position: absolute;
    bottom: 100px;
    right: 10px;
    display: flex;
    gap: 15px;
}

.icons i {
    width: 30px;
    height: 30px;
    font-size: 14px;
    font-weight: 600;
    color: black;
    background-color: white;
    padding: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icons i:hover {
    color: white;
    background-color: black;
}

.indicators {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 10px;
}

.indicator {
    width: 25px;
    height: 3px;
    background-color: rgb(204, 196, 196);
    transition: background-color 0.3s;
}

.indicator.active {
    background-color: black;
}

.product-name {
    margin-top: 10px;
    font-size: 16px;
    color: black;
}

.product-info {
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 14px;
    color: grey;
}

.discount {
    font-size: 12px;
    font-weight: 600;
    color: red;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.vertical-line {
    width: 0.75px;
    height: 30px;
    background-color: rgb(212, 203, 203);
    margin: 0 10px;
}

.current-price {
    color: red;
    font-weight: 600;
    letter-spacing: 0.4px;
}

.original-price {
    font-weight: 550;
    text-decoration: line-through;
    color: black;
    margin-left: 10px;
}

.color-indicator {
    position: absolute;
    bottom: -20px;
    left: -1px;
    width: 12px;
    height: 12px;
    background-color: #10104c;
    border-radius: 50%;
}
</style>