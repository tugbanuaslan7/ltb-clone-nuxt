<template>
    <div class="search-modal" @click.self="closeModal">
        <div class="modal-content container">
            
            <div class="row">
                <div class="col-md-3">
                    <Kategori />
                </div>
                <div class="col-md-9">
                    <Product />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import Kategori from './Kategori.vue'; // Kategori bileşenini import ediyoruz
import Product from './Product.vue'; // Product bileşenini import ediyoruz

const isOpen = ref(true);

// Modal'ı kapatma fonksiyonu
const closeModal = () => {
    isOpen.value = false;
};
</script>

<style scoped>
.search-modal {
    font-family: 'Mulish', sans-serif;
    position: fixed;
    top: 50%; /* Ortalamak için */
    left: 50%;
    transform: translate(-50%, -50%); /* Tam ortada hizalama */
    background-color: #f9f9f9;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    max-width: 90%;
    max-height: 100%; 
}

.modal-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

/* Bootstrap grid sınıflarını kullanarak responsive düzenleme */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.category-sidebar {
    width: 30%;
    /* Kategori kısmı için genişlik */
    padding: 20px;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
}

.product-sidebar {
    width: 70%;
    /* Ürünler kısmı için genişlik */
    padding: 20px;
}

/* Mobil cihazlarda dikey hizalama */
@media (max-width: 768px) {
    .modal-content {
        flex-direction: column;
    }
}

.category-sidebar,
.product-sidebar {
    width: 100%;
}
</style>