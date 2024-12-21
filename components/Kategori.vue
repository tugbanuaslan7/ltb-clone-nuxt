<template>
  <div class="kategori">
    <h2>POPÜLER KATEGORİLER</h2>
    <div class="category-list">
      <button v-for="(category, index) in categories" :key="index">
        <span class="title">{{ category.title }}</span>
        <span class="subtitle">{{ category.subtitle }}</span>
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { title: 'KADIN', subtitle: 'JEANS' },
        { title: 'KADIN', subtitle: 'TRİKO & HIRKA MODELLERİ' },
        { title: 'ERKEK', subtitle: 'SWEATSHIRT' },
        { title: 'ERKEK', subtitle: 'CEKET & MONT' },
        { title: 'ERKEK', subtitle: 'TRİKO & HIRKA' },
        { title: 'ERKEK', subtitle: 'JEANS' },
        { title: 'ERKEK', subtitle: 'PANTOLON' },
        { title: 'KADIN', subtitle: 'MONT MODELLERİ' },
        { title: '        ', subtitle: 'WOMEN' },
        { title: 'KAMPANYALAR', subtitle: 'KAMPANYALAR' },
        { title: 'ERKEK', subtitle: 'GÖMLEK' },
        { title: 'KADIN', subtitle: 'KADIN EŞOFMAN ALTI' },
      ]
    }
  }
}
</script>

<style scoped>
.kategori {
  font-family: 'Mulish', sans-serif;
  width: 220px;
  padding: 10px;
  background-color: #f9f9f9;
}

.kategori h2 {
  font-size: 12px;
  font-weight: bold;
  color: black;
}

.category-list {
  display: flex;
  flex-direction: column;
}

.category-list button {
  margin: 0px 0;
  padding: 0px 20px;
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: left;
  border: none;
  width: 210px;
  height: 30px;
  position: relative; /* Arrow pozisyonlandırması için gerekli */
  transition: all 0.3s ease; /* Hover animasyonu için */
}

.category-list i {
  position: absolute;
  right: 10px; /* Butonun sağına yerleştirme */
  top: 50%;
  transform: translateY(-50%);
  opacity: 0; /* Görünmez yapar */
  font-size: 12px;
  color: black;
  transition: opacity 0.3s ease; /* Görünme animasyonu */
}

.category-list button:hover i {
  opacity: 1; /* Hover durumunda görünür yapar */
  animation: move 0.4s infinite alternate; /* Hareket animasyonu */
}

.category-list button:hover {
  background-color: #fff;
}

.category-list .title {
  display: block;
  font-size: 9px;
  font-weight: 600;
  color: grey; /* Başlık yazı rengini gri yaptık */
}

.category-list .subtitle {
  display: block;
  font-size: 12px;
  font-weight: 530;
  color: black;
}

.category-list button:nth-child(9) .subtitle {
  position: absolute;
  bottom: 0px; /* Alt kısma sabitleme */
  left: 20px; /* Soldan hizalama */
}

@keyframes move {
  0% {
    transform: translateY(-50%) translateX(0);
  }
  100% {
    transform: translateY(-50%) translateX(5px); /* Sağ-sol hareketi */
  }
}
</style>