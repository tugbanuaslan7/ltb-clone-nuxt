<template>
  <div ref="carouselExample" id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === activeIndex }]"
      >
        <img :src="image" class="d-block w-100 carousel-image" alt="Carousel Image">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

    <!-- Fotoğrafların altındaki göstergeler (yuvarlaklar) -->
    <div class="carousel-indicators">
      <button
        v-for="(image, index) in images"
        :key="index"
        :class="['indicator', { active: index === activeIndex }]"
        :data-bs-target="`#carouselExample`"
        :data-bs-slide-to="index"
        @click="setActiveIndex(index)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCarouselStore } from '~/stores/carousel';

const store = useCarouselStore();
const { activeIndex, setActiveIndex } = store;

const images = [
  '/assets/images/carousel-1.jpg',
  '/assets/images/carousel-2.jpg',
  '/assets/images/carousel-3.jpg',
  '/assets/images/carousel-4.jpg',
  '/assets/images/carousel-5.jpg',
  '/assets/images/carousel-6.jpg',
];
</script>

<style scoped>
.carousel-container {
  max-width: 100%;
  overflow-x: hidden; /* Yatay kaydırmayı engelle */
}

.carousel-image {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin: auto;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  color: white;
  width: 15px;
  height: 15px;
  background-color: transparent;
  mask: none;
  -webkit-mask: none;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

/* Fotoğrafların altındaki yuvarlaklar */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 6px; /* Aralarındaki mesafe */
  margin-bottom: 20px;
}

.indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid white;
  cursor: pointer;
}

.indicator.active {
  background-color: transparent;
  border-color: white;
}
</style>
