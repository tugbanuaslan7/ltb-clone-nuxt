<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <img src="/assets/images/ltb-logo.png" alt="Logo" />
    </div>

    <!-- Menü -->
    <ul class="menu">
      <li><a href="#">Jean</a></li>
      <li><a href="#">Kadın</a></li>
      <li><a href="#">Erkek</a></li>
      <li><a href="#">Çocuk</a></li>
      <li><a href="#">Outlet</a></li>
      <li><a href="#">Kampanyalar</a></li>
    </ul>


    <!-- Arama Çubuğu -->


    <div class="search-bar">
      <input type="text" placeholder="Arama Yap" />
      <button type="submit" class="search-button">
        <i class="bi bi-search"></i>
      </button>

    </div>


    <!-- Sağdaki Eylemler -->
     <div class="actions">
      <button class="login-btn">
        <i class="bi bi-person"></i> <!-- Bootstrap User İkonu -->
        <span>Hesabım</span>
      </button>
      <button class="cart-btn">
        <i class="bi bi-cart"></i> <!-- Bootstrap Shopping Cart İkonu -->
        <span>Sepet</span>
      </button>
      <button class="radio-btn">
        <i class="bi bi-broadcast"></i> <!-- Bootstrap Broadcast İkonu -->
        <span>Radio</span>
      </button>
    </div>
  </nav>

  <!-- İkinci Bar (alt bar) -->
  <div class="secondary-navbar">
    <ul class="secondary-menu">
      <li v-for="(message, index) in messages" :key="index">
        <span v-if="index === messageIndex">{{ message }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Mesajlar listesi
const messages = [
  '25 Kasım - 2 Aralık Tarihleri Arasında Ücretsiz Kargo Fırsatı!',
  'Sonbahar / Kış Koleksiyonunda Geçerli NET %30 İndirim!',
  'Hemen Üye Ol! Üyelere Özel İlk Alışverişlerinizde Geçerli %15 İndirim Şansını Yakala!',
]

// Hangi mesajın gösterileceğini takip eden reaktif değişken
const messageIndex = ref(0);

// Mesajın değişmesi için setInterval kullanıyoruz
onMounted(() => {
  setInterval(() => {
    // index sırasını değiştirerek yeni mesajı gösteriyoruz
    messageIndex.value = (messageIndex.value + 1) % messages.length;
  }, 3000); // Her 3 saniyede bir değişim
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');


/* Tarayıcı varsayılan margin ve padding değerlerini sıfırla */
* {
  box-sizing: border-box;
  /* Tüm elemanlar için border-box kullanımı */
  font-family: 'Mulish', sans-serif;
  font-weight: 510;

}


/* Navbar (Ana Bar) */
.navbar {
  width: 100vw;
  /* Ekran genişliğini tam kapla */
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: flex;
  z-index: 10;
}

.logo img {
  height: 62px;
  margin-left: 63px;
  margin-top: -11px;
}

.menu {
  list-style: none;
  display: flex;
  gap: 35px;
  justify-content: flex-start;
  margin-top: -1px;
  margin-left: 0px;
  /* bunda menu ogeleri biraz daha saga kayması gerekiyor */
}

.menu a {
  color: black;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: -0.3px;
}

.menu a:hover {
  color: grey;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -8px;
  position: relative;
  left: 35px;
}

.search-bar input {
  padding: 10px;
  font-size: 14px;
  font-weight: 200;
  border: none;
  border-bottom: 1px solid black;
  /* Kenarlık rengi */
  outline: none;
  /* Odaklandığında kenarlık rengini kaldırma */
  width: 220px;
  /* Genişlik */
  transition: border-color 0.3s;
  /* Kenarlık renginin geçiş süresi */
  position: relative;
  top: -3px;
  /* Yazıyı yukarı kaydır */
  line-height: 1.8;
  /* Satır yüksekliğini artırarak yazı ile çizgi arasındaki boşluğu artır */
  padding-bottom: 10px;
  /* Alt çizgi ile yazı arasındaki boşluğu artır */

  letter-spacing: 0.3px;

}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  width: 30px;
  /* Butonun genişliği */
  height: 30px;
  /* Butonun yüksekliği */
}

.search-button i {
  font-size: 20px;
  /* Büyüteç simgesi boyutu */
  color: #777;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  /* Konumlandırma için */
  left: 200px;
  /* Sağ tarafa hizalama */
  top: 50%;
  /* Dikeyde ortalama */
  transform: translateY(-50%);
  /* Tam ortalama */
}

.actions {
  display: flex;
  align-items: center;
  gap: 5px;
}

.actions button {
  display: flex; /* İkon ve yazıyı hizalamak için flexbox */
  flex-direction: column; /* İkonu yazının üstüne yerleştirir */
  align-items: center; /* İkon ve yazıyı ortalar */
  justify-content: center; /* Dikey ortalama */
  gap: 5px; /* İkon ve yazı arasındaki boşluk */
  background-color: white; /* Arka plan rengi */
  color: black; /* Varsayılan yazı ve ikon rengi */
  padding: 10px 15px; /* İç boşluklar */
  cursor: pointer; /* Tıklanabilir olduğunu gösterir */
  transition: all 0.3s ease; /* Hover geçişi için animasyon */
  border: none;
  width: 70px;
  height: 70px;
}

.actions button i {
  font-size: 19px; /* İkon boyutu */
}

.actions button span {
  font-size: 12px; /* Yazı boyutu */
}

.actions button:hover {
  background-color: white; /* Arka plan rengi değişmez */
  color: red; /* Yazı ve ikon rengi kırmızı olur */
}

.actions button:hover i {
  color: red; /* İkon rengini kırmızı yap */
}

.actions button:hover span {
  color: red; /* Yazı rengini kırmızı yap */
}



/* İkinci Bar (Alt Bar) */
.secondary-navbar {
  width: 100vw;
  /* Ekran genişliğini tam kapla */
  background-color: black;
  color: white;
  box-sizing: border-box;
  /* Border ve paddingi genişliğe dahil et */
  position: relative;
  z-index: 5;
  height: 40px;
  display: flex;
  justify-content: center;
  /* Yazıyı yatayda ortala */
  align-items: center;
  /* Yazıyı dikeyde ortala */
}

.secondary-menu {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.secondary-menu li {
  color: white;
}

.secondary-menu li span {
  display: inline-block;
  padding: 5px;
  font-size: 13px;
}
</style>