<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <router-link to="/">
        <img src="/assets/images/ltb-logo.png" alt="Logo" />
      </router-link>
    </div>

    <!-- Menü -->
    <ul class="menu">
      <li @mouseenter="showJean" @mouseleave="hideJean">
        <a href="#">Jean</a>
      </li>

      <li @mouseenter="showKadin" @mouseleave="hideKadin">
        <router-link to="/KadinJean"> Kadın</router-link>
      </li>

      <li @mouseenter="showErkek" @mouseleave="hideErkek">
        <a href="#">Erkek</a>
      </li>

      <li @mouseenter="showCocuk" @mouseleave="hideCocuk">
        <a href="#">Çocuk</a>
      </li>

      <li @mouseenter="showOutlet" @mouseleave="hideOutlet">
        <a href="#">Outlet</a>
      </li>

      <li @mouseenter="showKampanyalar" @mouseleave="hideKampanyalar">
        <a href="#">Kampanyalar</a>
      </li>
    </ul>

    <!-- Jean içeriği -->
    <div :class="{ 'popup-container': true, active: isJeanVisible }" @mouseenter="enterJean" @mouseleave="leaveJean">
      <Jean />
    </div>

    <!-- Kadın içeriği -->
    <div :class="{ 'popup-container': true, active: isKadinVisible }" @mouseenter="enterKadin" @mouseleave="leaveKadin">
      <Kadin />
    </div>

    <div :class="{ 'popup-container': true, active: isErkekVisible }" @mouseenter="enterErkek" @mouseleave="leaveErkek">
      <Erkek />
    </div>

    <div :class="{ 'popup-container': true, active: isCocukVisible }" @mouseenter="enterCocuk" @mouseleave="leaveCocuk">
      <Cocuk />
    </div>

    <div :class="{ 'popup-container': true, active: isOutletVisible }" @mouseenter="enterOutlet"
      @mouseleave="leaveOutlet">
      <Outlet />
    </div>

    <div :class="{ 'popup-container': true, active: isKampanyalarVisible }" @mouseenter="enterKampanyalar"
      @mouseleave="leaveKampanyalar">
      <Kampanyalar />
    </div>



    <!-- Arama Çubuğu -->
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Arama Yap" @click="toggleSearchModal"
        @input="handleSearch" />
      <button type="submit" class="search-button" @click="handleSubmit">
        <i class="bi bi-search"></i>
      </button>
    </div>

    <div v-for="(product, index) in filteredProducts" :key="index">
      <div v-if="index === 0">
        <Cart1 :product="product" />
      </div>
      <div v-if="index === 1">
        <Cart2 :product="product" />
      </div>
    </div>


    <!-- SearchModal açılacak -->
    <SearchModal v-if="showSearchModal" :searchQuery="searchQuery" @close="toggleSearchModal" />



    <!-- Sağdaki Eylemler -->
    <div class="actions">
      <button class="bell-btn" @click="goToBildirimler">
        <i class="bi bi-bell"></i>
        <span>Bildirimler</span>
      </button>
      <button v-if="isLoggedIn" class="fav-btn" @click="goToFavoriler">
        <i class="bi bi-heart"></i>
        <span>Favoriler</span>
      </button>
      <button v-if="!isLoggedIn" class="login-btn" @click="goToLogin">
        <i class="bi bi-person"></i>
        <span>GirişYap</span>
      </button>
      <button v-if="isLoggedIn" class="account-btn" @click="goToAccount">
        <i class="bi bi-person"></i>
        <span>Hesabım</span>
      </button>
      <button class="cart-btn" @click="goToSepetim">
        <i class="bi bi-cart"></i> <!-- Bootstrap Shopping Cart İkonu -->
        <span>Sepet</span>
      </button>
      <button class="radio-btn">
        <i class="bi bi-broadcast"></i> <!-- Bootstrap Broadcast İkonu -->
        <span>Radio</span>
      </button>
    </div>
  </nav>

  <!-- Jean Bileşenini Navbar'ın Altında Göster -->
  <div v-if="isJeanVisible" class="popup-container" @mouseenter="enterJean" @mouseleave="leaveJean">
    <Jean />
  </div>

  <div v-if="isKadinVisible" class="popup-container" @mouseenter="enterKadin" @mouseleave="leaveKadin">
    <Kadin />
  </div>

  <div v-if="isErkekVisible" class="popup-container" @mouseenter="enterErkek" @mouseleave="leaveErkek">
    <Erkek />
  </div>

  <div v-if="isCocukVisible" class="popup-container" @mouseenter="enterCocuk" @mouseleave="leaveCocuk">
    <Cocuk />
  </div>

  <div v-if="isOutletVisible" class="popup-container" @mouseenter="enterOutlet" @mouseleave="leaveOutlet">
    <Outlet />
  </div>

  <div v-if="isKampanyalarVisible" class="popup-container" @mouseenter="enterKampanyalar"
    @mouseleave="leaveKampanyalar">
    <Kampanyalar />
  </div>


  <!-- İkinci Bar (alt bar) -->
  <div v-if="showSecondaryNavbar" class="secondary-navbar">
    <ul class="secondary-menu">
      <li v-for="(message, index) in messages" :key="index">
        <span v-if="index === messageIndex">{{ message }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Jean from '~/components/Jean.vue';
import Kadin from '~/components/Kadin.vue';
import SearchModal from '~/components/SearchModal.vue';
import { useRouter } from 'vue-router'; // Vue Router'ı import et
import { useProducts } from '@/stores/productsStore';
import { useAuthStore } from '@/stores/auth';
import Cart1 from '~/components/Cart1.vue';
import Cart2 from '~/components/Cart2.vue';
import Favoriler from '~/pages/Favoriler.vue';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const db = getFirestore();

const { searchQuery, products, searchProducts } = useProducts(); // Pinia Store'dan al

const showSearchModal = ref(false);

const filteredProducts = ref([]);

const authStore = useAuthStore();

// Arama işlemi her yazıldıkça çalışacak
const handleSearch = async () => {
  await searchProducts(); // Pinia'daki searchProducts fonksiyonunu çağır
  filteredProducts.value = products.value; // Ürünleri filtrele
};


// Firebase'den ürünleri al
onMounted(async () => {
  // Başlangıçta tüm ürünleri çek
  await fetchProducts();
});


// Firebase'den ürünleri çekme ve filtreleme
const fetchProducts = async () => {
  try {
    const q = searchQuery.value.trim()
      ? query(collection(db, 'products'), where("name", "==", searchQuery.value)) // Arama sorgusuna göre filtrele
      : collection(db, 'products'); // Arama yoksa tüm ürünleri getir

    const querySnapshot = await getDocs(q);
    products.value = querySnapshot.docs.map(doc => doc.data());
    filteredProducts.value = [...products.value]; // Başlangıçta tüm ürünler
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
};

// Modal açma fonksiyonu
const toggleSearchModal = () => {
  showSearchModal.value = !showSearchModal.value;
  document.body.classList.toggle('modal-open');
};


const router = useRouter(); // useRouter hook'unu kullan

const isLoggedIn = computed(() => authStore.isLoggedIn);

const goToFavoriler = () => {
  router.push('/Favoriler');
};
const goToBildirimler = () => {
  router.push('/Bildirimler');
};
const goToAccount = () => {
  router.push('/Hesabim');
};

const goToLogin = () => {
  router.push('/Giris'); // Login sayfasına yönlendir
};

const goToSepetim = () => {
  router.push('/Sepet'); // 'Sepetim' route'una yönlendirir
};




// Durum değişkenleri
const isJeanVisible = ref(false); // Jean bileşeni görünür mü?
const isMouseInsideJean = ref(false); // Fare Jean menüsü veya içeriği üzerinde mi?

const isKadinVisible = ref(false);
const isMouseInsideKadin = ref(false);

const isErkekVisible = ref(false);
const isMouseInsideErkek = ref(false);

const isCocukVisible = ref(false);
const isMouseInsideCocuk = ref(false);

const isOutletVisible = ref(false);
const isMouseInsideOutlet = ref(false);

const isKampanyalarVisible = ref(false);
const isMouseInsideKampanyalar = ref(false);

// Kategoriler listesi
const categories = [
  { title: 'KADIN', subtitle: 'JEANS' },
  { title: 'KADIN', subtitle: 'TRİKO & HIRKA MODELLERİ' },
  { title: 'ERKEK', subtitle: 'SWEATSHIRT' },
  { title: 'ERKEK', subtitle: 'CEKET & MONT' },
  { title: 'ERKEK', subtitle: 'TRİKO & HIRKA' },
  { title: 'ERKEK', subtitle: 'JEANS' },
  { title: 'ERKEK', subtitle: 'PANTOLON' },
  { title: 'KADIN', subtitle: 'MONT MODELLERİ' },
  { title: ' ', subtitle: 'WOMEN' },
  { title: 'KAMPANYALAR', subtitle: 'KAMPANYALAR' },
  { title: 'ERKEK', subtitle: 'GÖMLEK' },
  { title: 'KADIN', subtitle: 'KADIN EŞOFMAN ALTI' },
];

// Olaylar
const showJean = () => (isJeanVisible.value = true);
const hideJean = () => {
  if (!isMouseInsideJean.value) {
    isJeanVisible.value = false;
  }
};
const enterJean = () => (isMouseInsideJean.value = true); // Fare içeride
const leaveJean = () => {
  isMouseInsideJean.value = false; // Fare çıktı
  hideJean();
};

const showKadin = () => (isKadinVisible.value = true);
const hideKadin = () => {
  if (!isMouseInsideKadin.value) {
    isKadinVisible.value = false;
  }
};
const enterKadin = () => (isMouseInsideKadin.value = true); // Fare içeride
const leaveKadin = () => {
  isMouseInsideKadin.value = false; // Fare çıktı
  hideKadin();
};

const showErkek = () => (isErkekVisible.value = true);
const hideErkek = () => {
  if (!isMouseInsideErkek.value) {
    isErkekVisible.value = false;
  }
};
const enterErkek = () => (isMouseInsideErkek.value = true); // Fare içeride
const leaveErkek = () => {
  isMouseInsideErkek.value = false; // Fare çıktı
  hideErkek();
};

const showCocuk = () => (isCocukVisible.value = true);
const hideCocuk = () => {
  if (!isMouseInsideCocuk.value) {
    isCocukVisible.value = false;
  }
};
const enterCocuk = () => (isMouseInsideCocuk.value = true); // Fare içeride
const leaveCocuk = () => {
  isMouseInsideCocuk.value = false; // Fare çıktı
  hideCocuk();
};

const showOutlet = () => (isOutletVisible.value = true);
const hideOutlet = () => {
  if (!isMouseInsideOutlet.value) {
    isOutletVisible.value = false;
  }
};
const enterOutlet = () => (isMouseInsideOutlet.value = true); // Fare içeride
const leaveOutlet = () => {
  isMouseInsideOutlet.value = false; // Fare çıktı
  hideOutlet();
};

const showKampanyalar = () => (isKampanyalarVisible.value = true);
const hideKampanyalar = () => {
  if (!isMouseInsideKampanyalar.value) {
    isKampanyalarVisible.value = false;
  }
};
const enterKampanyalar = () => (isMouseInsideKampanyalar.value = true); // Fare içeride
const leaveKampanyalar = () => {
  isMouseInsideKampanyalar.value = false; // Fare çıktı
  hideKampanyalar();
};

// Mesajlar listesi
const messages = [
  '25 Kasım - 2 Aralık Tarihleri Arasında Ücretsiz Kargo Fırsatı!',
  'Sonbahar / Kış Koleksiyonunda Geçerli NET %30 İndirim!',
  'Hemen Üye Ol! Üyelere Özel İlk Alışverişlerinizde Geçerli %15 İndirim Şansını Yakala!',
];

// Hangi mesajın gösterileceğini takip eden reaktif değişken
const messageIndex = ref(0);

// Mesajın değişmesi için setInterval kullanıyoruz
onMounted(() => {
  setInterval(() => {
    // index sırasını değiştirerek yeni mesajı gösteriyoruz
    messageIndex.value = (messageIndex.value + 1) % messages.length;
  }, 3000); // Her 3 saniyede bir değişim
});

// Navbar'ın alt barını gösterip gizlemek için veri
const showSecondaryNavbar = ref(true);

// Vue Router ile sayfa değişimlerini izleyip navbar durumunu güncelle
router.beforeEach((to) => {
  if (to.name === 'Giris') {
    showSecondaryNavbar.value = false;
  } else {
    showSecondaryNavbar.value = true;
  }
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: white;
  z-index: 10;
}

.modal-open {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}


/* Tarayıcı varsayılan margin ve padding değerlerini sıfırla */
* {
  box-sizing: border-box;
  /* Tüm elemanlar için border-box kullanımı */
  font-family: 'Mulish', sans-serif;
  font-weight: 510;
  margin: 0;
  padding: 0;
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

/* Mobil cihazlar için responsive düzenleme */
@media (max-width: 768px) {
  .menu {
    display: none;
    /* Mobilde menü gizlenecek */
    flex-direction: column;
    gap: 15px;
  }
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
  gap: 2px;
}

.actions button {
  display: flex;
  /* İkon ve yazıyı hizalamak için flexbox */
  flex-direction: column;
  /* İkonu yazının üstüne yerleştirir */
  align-items: center;
  /* İkon ve yazıyı ortalar */
  justify-content: center;
  /* Dikey ortalama */
  gap: 2px;
  /* İkon ve yazı arasındaki boşluk */
  background-color: white;
  /* Arka plan rengi */
  color: black;
  /* Varsayılan yazı ve ikon rengi */
  padding: 2px 7px;
  /* İç boşluklar */
  cursor: pointer;
  /* Tıklanabilir olduğunu gösterir */
  transition: all 0.3s ease;
  /* Hover geçişi için animasyon */
  border: none;
  width: 60px;
  height: 60px;
}

.actions button i {
  font-size: 16px;
  /* İkon boyutu */
}

.actions button span {
  font-size: 11px;
  /* Yazı boyutu */
}

.actions button:hover {
  background-color: white;
  /* Arka plan rengi değişmez */
  color: red;
  /* Yazı ve ikon rengi kırmızı olur */
}

.actions button:hover i {
  color: red;
  /* İkon rengini kırmızı yap */
}

.actions button:hover span {
  color: red;
  /* Yazı rengini kırmızı yap */
}

.popup-container {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: none;
  transition: opacity 0.3s ease;
}

.popup-container.active {
  display: block;
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