<template>
  <div class="jeans-page" @mouseenter="showJean" @mouseleave="checkToHideJean">
    <div class="categories">
      <!-- Sol Sütun -->
      <div class="left-column">
        <section class="category">
          <h2><a href="/kadin-jean">Kadın Jean</a></h2>
          <ul class="menu">
            <li @mouseenter="showJean" @mouseleave="checkToHideJean">
              <!-- Jean Popup -->
        <div
          v-if="showJeanPopup"
          class="popup"
          @mouseenter="popupHovered = true"
          @mouseleave="popupHovered = false"
        >
          <Jean />
              </div>
            </li>
            <li><a href="#">Kadın</a></li>
            <li><a href="#">Erkek</a></li>
            <li><a href="#">Çocuk</a></li>
            <li><a href="#">Outlet</a></li>
            <li><a href="#">Kampanyalar</a></li>
          </ul>
        </section>

        <section class="category">
          <h2><a href="/diger-jeanler">Diğer Jean'ler</a></h2>
          <ul>
            <li><a href="/ceket">Ceket</a></li>
            <li><a href="/gomlek">Gömlek</a></li>
            <li><a href="/sort">Şort</a></li>
          </ul>
        </section>
      </div>

      <!-- Orta Sütun -->
      <div class="other-column">
        <section class="category">
          <h2><a href="/digerleri">Diğer Jean'ler</a></h2>
          <ul>
            <li><a href="/ceket">Ceket</a></li>
            <li><a href="/gomlek">Gömlek</a></li>
            <li><a href="/elbise">Elbise</a></li>
            <li><a href="/etek">Etek</a></li>
            <li><a href="/sort">Şort</a></li>
          </ul>
        </section>
      </div>

      <!-- Sağ Sütun -->
      <div class="right-column">
        <section class="category">
          <h2><a href="/erkek-jean">Erkek Jean</a></h2>
          <ul>
            <li><a href="/super-skinny">Super Skinny</a></li>
            <li><a href="/skinny">Skinny</a></li>
            <li><a href="/slin">Slim</a></li>
            <li><a href="/slim-carrot">Slim Carrot</a></li>
            <li><a href="/cropped">Cropped</a></li>
            <li><a href="/straight">Straight</a></li>
            <li><a href="/loose-fit">Loose Fit</a></li>
          </ul>
        </section>

        <div class="image-container">
          <a href="/jean-products">
            <img src="../public/assets/images/jean.jpg" alt="Jean Fotoğrafı" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false, // Jean popup'ının görünürlüğü
      popupHovered: false, // Popup içine fare girip girmediği
    };
  },
  methods: {
    // Jean menüsüne fare gelince popup'ı göster
    showJean() {
      this.showPopup = true;
    },
    // Jean menüsünden fare çıkınca popup'ı gizle
    checkToHideJean() {
      if (!this.popupHovered) {
        this.showPopup = false;
      }
    }
  },
};
</script>


<style scoped>
.jeans-page {
  padding: 20px;
  font-family: 'Mulish', sans-serif;
  color: #333;
  background-color: white;
}

.categories {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.categories:hover .category a {
  color: red;
  /* Jean hover efekti için renk değişikliği */
}

.category h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
}

.category h2 a {
  font-size: 20px;
  color: inherit;
  text-decoration: none;
}

.category h2 a:hover {
  color: grey;
  /* Hover sırasında da gri kalacak */
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
  /* Alt çizgiyi kaldırır */
  color: black;
  /* Bağlantı rengi */
  transition: color 0.3s ease;
}

.category li a {
  color: rgb(73, 71, 71);
  font-weight: 500;
}

.category a:hover {
  color: red;
  /* Hover rengini belirler */
}

.popup {
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.popup p {
  margin: 0;
}

.other-column {
  margin-left: 10px;
  /* Sağdaki sütunun soluna negatif margin uygulayarak sola kaydırır */
}

.right-column {
  display: flex;
  flex-direction: column;
  margin-right: 650px;
  /* Sağdaki sütunun soluna negatif margin uygulayarak sola kaydırır */
}

.image-container {
  position: absolute;
  top: 50px;
  /* Yukarıdan 50px */
  right: 0;
  /* Soldan 100px */
}

.image-container a {
  display: inline-block;
  /* Bağlantının etrafında tıklanabilir alan yaratır */
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
  /* Hover durumunda soluklaşma efekti */
}
</style>
