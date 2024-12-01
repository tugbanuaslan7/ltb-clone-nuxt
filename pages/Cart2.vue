<template>
    <div class="cart-frame">
        <div class="cart2-wrapper">
            <div class="cart2" @mouseover="startImageRotation" @mouseleave="stopImageRotation"
                @mousemove="handleMouseMove">
                <img :src="currentImage" alt="Product Image" class="product-image" />
                <div class="icons">
                    <i class="bi bi-cart"></i>
                    <i class="bi bi-heart"></i>
                </div>
                <div class="indicators">
                    <span v-for="(image, index) in images" :key="index"
                        :class="['indicator', { active: currentIndex === index }]"></span>
                </div>
                <div class="product-name">Wanda Yüksek Bel Düz Paça Straight Jean Pantolon</div>
                <div class="product-info">
                    <div class="discount">
                        <span>%25</span>
                        <span>indirim</span>
                    </div>
                    <span class="vertical-line"></span>
                    <span class="current-price">712,49 TL</span>
                    <span class="original-price">949,99 TL</span>
                </div>
                <div class="color-indicators">
                    <div class="color-indicator" style="background-color: rgb(55, 58, 87);"></div>
                    <div class="color-indicator" style="background-color: rgb(81, 87, 131);"></div>
                    <div class="color-indicator" style="background-color: #10104c;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';

const images = [
    '/assets/images/wanda-1.jpg',
    '/assets/images/wanda-2.jpg',
    '/assets/images/wanda-3.jpg',
    '/assets/images/wanda-4.jpg',
    '/assets/images/wanda-5.jpg',
];
const currentIndex = ref(0);
const currentImage = ref(images[currentIndex.value]);

let interval;
let lastMouseX = ref(0);
let debounceTimeout;

const startImageRotation = () => {
    interval = setInterval(() => {
        if (currentIndex.value < images.length - 1) {
            currentIndex.value++;
            currentImage.value = images[currentIndex.value];
        } else {
            clearInterval(interval); // Son fotoğrafa ulaşıldığında döngüyü durdur
        }
    }, 3000); // Değişim süresi 3000 milisaniye (3 saniye) olarak ayarlandı
};

const stopImageRotation = () => {
    clearInterval(interval);
};

const handleMouseMove = (event) => {
    clearTimeout(debounceTimeout);
    const direction = event.clientX - lastMouseX.value;
    lastMouseX.value = event.clientX;

    debounceTimeout = setTimeout(() => {
        if (direction > 0 && currentIndex.value < images.length - 1) {
            // Mouse moved right and stopped
            currentIndex.value++;
        } else if (direction < 0 && currentIndex.value > 0) {
            // Mouse moved left and stopped
            currentIndex.value--;
        }
        currentImage.value = images[currentIndex.value];
    }, 300); // 300 milisaniye gecikme
};

onUnmounted(() => {
    clearInterval(interval);
    clearTimeout(debounceTimeout);
});
</script>
<style scoped>
.cart2-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Fotoğrafı ve göstergeleri ortalamak için */
}

.cart2 {
    width: 410px;
    height: auto;
    overflow: visible;
    /* İçeriğin dışarı taşmasına izin ver */
    position: relative;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 20px;
}

.cart-frame {
    display: flex; /* Flexbox kullanarak ortalama */
    justify-content: center; /* Yatayda ortala */
    align-items: center; /* Dikeyde ortala */
    padding: 10px;
    border: 2px solid transparent;
    background-color: transparent;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.2s ease-in-out;
    /* Geçiş animasyonu */
}

.icons {
    position: absolute;
    bottom: 100px;
    /* Sağ alt köşeye yerleştirme */
    right: 10px;
    display: flex;
    gap: 15px;
    /* İkonlar arasındaki boşluk */
}

.icons i {
    width: 30px; /* Çerçevenin genişliği ve yüksekliği (daha küçük boyut) */
    height: 30px;
    font-size: 14px; /* İkon boyutu (daha küçük) */
    font-weight: 600;
    color: black; /* İkon rengi */
    background-color: white; /* Arka plan rengi */
    padding: 0; /* İç boşluğu kaldır */
    border-radius: 50%; /* Tam yuvarlak */
    display: flex; /* İkonu ortalamak için */
    align-items: center; /* Dikey ortalama */
    justify-content: center; /* Yatay ortalama */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Hafif bir gölge */
}

.icons i:hover {
    color: white;
    /* İkon rengi */
    background-color: black;
    /* Arka plan rengi */
}

.indicators {
    display: flex;
    justify-content: center;
    /* Ortalamak için */
    gap: 6px;
    /* Göstergeler arasındaki boşluk */
    margin-top: 10px;
    /* Fotoğraf ile göstergeler arasında boşluk */
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
    /* Göstergeler ile yazı arasında boşluk */
    margin-left: 0;
    /* Yazıyı en soldan başlatma */
    font-size: 16px;
    /* Yazı boyutu */
    color: black;
    /* Yazı rengi */
}

.product-info {
    display: flex;
    align-items: center;
    margin-top: 5px;
    /* İsim ile bilgi arasında boşluk */
    margin-left: 0;
    /* Yazıyı en soldan başlatma */
    font-size: 14px;
    /* Yazı boyutu */
    color: grey;
    /* Yazı rengi */
}

.discount {
    font-size: 12px;
    font-weight: 600;
    color: red;
    /* İndirim yazısı rengi */
    display: flex;
    flex-direction: column;
    /* Alt alta yerleştirme */
    align-items: flex-end;
    /* Sağa hizalama */
}

.vertical-line {
    width: 0.75px;
    /* Çizgi genişliği */
    height: 30px;
    /* Çizgi yüksekliği */
    background-color: rgb(212, 203, 203);
    /* Çizgi rengi */
    margin: 0 10px;
    /* Dikey çizgi etrafındaki boşluk */
}

.current-price {
    color: red;
    /* Güncel fiyat rengi */
    font-weight: 600;
    /* Güncel fiyat kalın yazı */
    letter-spacing: 0.4px;
}

.original-price {
    font-weight: 550;
    text-decoration: line-through;
    /* Eski fiyat üstü çizili */
    color: black;
    /* Eski fiyat rengi */
    margin-left: 10px;
    /* Eski fiyat ile güncel fiyat arasındaki boşluk */
}

.color-indicators {
    display: flex;
    gap: 5px;
    /* Renk göstergeleri arasındaki boşluk */
    position: absolute;
    bottom: -20px;
    /* Alt kenardan 10px yukarıda */
    left: -1px;
    /* Sol kenardan 10px içeride */
}

.color-indicator {
    width: 12px;
    /* Yuvarlak şekil boyutu */
    height: 12px;
    border-radius: 50%;
    /* Tam yuvarlak şekil */
    cursor: default; /* İmleci değiştirmemek için ekledik */
}
</style>