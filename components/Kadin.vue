<template>
  <div class="kadin-page" >
    <div class="categories">
      <!-- Birinci Sütun -->
      <div class="first-column">
        <section class="category">
          <h2><a href="/yeni-gelenler">Yeni Gelenler</a></h2>
          <ul>
            <li><a href="/tum-runler">Tüm ürünleri gör</a></li>
          </ul>
        </section>
      </div>

      <!-- İkinci Sütun -->
      <div class="second-column">
        <section class="category">
          <h2><a href="/ust-giyim">Üst Giyim</a></h2>
          <ul>
            <li><a href="/atlet">Atlet</a></li>
            <li><a href="/tisort">Tişört</a></li>
            <li><a href="/gomlek">Gömlek</a></li>
            <li><a href="/bluz">Bluz</a></li>
            <li><a href="/elbise">Elbise</a></li>
            <li><a href="/bustiyer">Büstiyer</a></li>
            <li><a href="/sweatshirt">Sweatshirt</a></li>
            <li><a href="/triko">Triko</a></li>
            <li><a href="/hirka">Hırka</a></li>
            <li><a href="/mont">Mont</a></li>
            <li><a href="/ceket">Ceket</a></li>
          </ul>
        </section>
      </div>

      <!-- Üçüncü Sütun -->
      <div class="third-column">
        <section class="category">
          <h2><a href="/alt-giyim">Alt Giyim</a></h2>
          <ul>
            <li><a href="/pantolon">Pantolon</a></li>
            <li><a href="/tayt">Tayt</a></li>
            <li><a href="/esofman-alti">Eşofman Altı</a></li>
            <li><a href="/etek">Etek</a></li>
            <li><a href="/sort">Şort</a></li>
          </ul>
        </section>
      </div>

      <!-- Dördüncü Sütun -->
      <div class="fourth-column">
        <section class="category">
          <h2><a href="/aksesuar">Aksesuar</a></h2>
          <ul>
            <li><a href="/canta">Çanta</a></li>
            <li><a href="/corap">Çorap</a></li>
            <li><a href="/gozluk">Gözlük</a></li>
            <li><a href="/kolye">Kolye</a></li>
            <li><a href="/bileklik">Bileklik</a></li>
            <li><a href="/sapka-sal-bere">Şapka & Şal & Bere</a></li>
          </ul>
        </section>
      </div>

      <!-- Beşinci Sütun -->
      <div class="fifth-column">
        <section class="category">
          <h2><a href="/active-wear">Active Wear</a></h2>
          <ul>
            <li><a href="/tum-runler">Tüm ürünleri gör</a></li>
          </ul>
        </section>
      </div>
    </div>

    <div class="image-container">
      <a href="/kadin-products">
        <img src="/public/assets/images/kadin.jpeg" alt="Jean Fotoğrafı" />
      </a>

      <!-- Popup yalnızca "isPopupVisible" doğruysa gösterilecek -->
      <div v-if="isPopupVisible" class="popup">

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Durum değişkeni
const isPopupVisible = ref(false); // Popup görünür mü?

// Olaylar
const showPopup = () => {
  isPopupVisible.value = true;
};
const hidePopup = () => {
  isPopupVisible.value = false;
};
</script>

<style scoped>
.kadin-page {
  padding: 20px;
  font-family: 'Mulish', sans-serif;
  color: #333;
}

.categories {
  display: flex;
  flex-wrap: wrap;
}

.category h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
}

.category h2 a {
  font-size: 20px;
  color: black;
}

.category h2 a:hover {
  color: grey;
}

.category ul {
  list-style: none;
  padding: 0;
}

.category li {
  margin-bottom: 6px;
}

.category a {
  font-size: 14px;
  text-decoration: none;
  color: rgb(73, 71, 71);
  font-weight: 500;
  transition: color 0.3s ease;
}

.category a:hover {
  color: red;
}

.second-column{
    margin-left: 100px;
}

.third-column {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
}

.fourth-column {
    display: flex;
    flex-direction: column;
    margin-right: 100px; 
}



.image-container {
  position: absolute;
  top: 50px;
  /* Yukarıdan 50px */
  right: 0;
  /* Soldan 100px */
}

.image-container img {
  width: 100%;
  max-width: 400px;
  height: auto;
  transition: opacity 0.3s ease;
  /* Soluklaşma geçişi */
}
.image-container a:hover img {
  opacity: 0.7;
}

/* Popup stili */
.popup {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.popup h3 {
  margin: 0 0 10px 0;
}

.popup p {
  margin: 0;
}

</style>
