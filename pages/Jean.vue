<template>
    <div class="jeans-page">
      <div class="categories">
        <!-- Sol Sütun -->
        <div class="left-column">
          <section class="category">
            <h2><a href="/kadin-jean">Kadın Jean</a></h2>
            <ul>
              <li><a href="/super-skinny">Super Skinny</a></li>
              <li><a href="/skinny">Skinny</a></li>
              <li><a href="/slim">Slim</a></li>
              <li><a href="/mom-jeans">Mom Jeans</a></li>
              <li><a href="/staright">Straight</a></li>
              <li><a href="/baloon-fit">Baloon Fit</a></li>
              <li><a href="/flare">Flare</a></li>
              <li><a href="/wide-leg">Wide Leg</a></li>
              <li><a href="/relaxed-leg">Relaxed Leg</a></li>
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
             <img src="/assets/images/jean.jpg" alt="Jean Fotoğrafı" />
            </a> 
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.jeans-page {
  padding: 20px;
  font-family: 'Mulish', sans-serif;
  color: #333;
}

.categories {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.category h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
}

.category h2 a{
  font-size: 20px;
}

.category h2 a:hover {
  color: grey; /* Hover sırasında da gri kalacak */
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
  text-decoration: none; /* Alt çizgiyi kaldırır */
  color: black; /* Bağlantı rengi */
  transition: color 0.3s ease;
}

.category li a{
  color: rgb(73, 71, 71);
  font-weight: 500;
}

.category a:hover {
  color: red; /* Hover rengini belirler */
}



.other-column{
    margin-left: 10px; /* Sağdaki sütunun soluna negatif margin uygulayarak sola kaydırır */
}

.right-column {
    display: flex;
    flex-direction: column;
    margin-right: 650px; /* Sağdaki sütunun soluna negatif margin uygulayarak sola kaydırır */
}

.image-container {
    position: absolute;
      top: 50px; /* Yukarıdan 50px */
      right: 0; /* Soldan 100px */
}

.image-container a {
  display: inline-block; /* Bağlantının etrafında tıklanabilir alan yaratır */
}

.image-container img {
  width: 100%;
  max-width: 400px;
  height: auto;
  transition: opacity 0.3s ease; /* Soluklaşma geçişi */
}

.image-container a:hover img{
  opacity: 0.7; /* Hover durumunda soluklaşma efekti */
}
</style>
