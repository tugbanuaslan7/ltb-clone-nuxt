<template>
    <div class="footer-page">
        <div class="categories">
            <!-- Birinci Sütun -->
            <div class="first-column">
                <section class="category">
                    <h2>LTB Jeans</h2>
                    <ul>
                        <li><a href="/sikayet-ve-onerileriniz">Şikayet ve Önerileriniz</a></li>
                        <li><a href="/iletisim-bilgilerimiz">İletişim Bilgilerimiz</a></li>
                        <li><a href="/fikri-ve-sinai-mulkiyet-hakları">Fikri ve Sınai Mülkiyet Hakları</a></li>
                        <li><a href="/islem-rehberi">İşlem Rehberi</a></li>
                        <li><a href="/sss">SSS</a></li>
                        <li><a href="/surdurulebilirlik">Sürdürülebilirlik</a></li>
                        <li><a href="/garanti-proseduru">Garanti Prosedürü</a></li>
                        <li><a href="/bayi-basvuru-formu">Bayi Başvuru Formu</a></li>
                    </ul>
                </section>
            </div>

            <!-- İkinci Sütun -->
            <div class="second-column">
                <section class="category">
                    <h2>Servisler</h2>
                    <ul>
                        <li><a href="/cayma-hakki">Cayma Hakkı</a></li>
                        <li><a href="/magazalar">Mağazalar</a></li>
                        <li><a href="/kisisel-verilerin-korunmasi">Kişisel Verilerin Korunması</a></li>
                        <li><a href="/on-bilgilendirme-formu">Ön Bilgilendirme Formu</a></li>
                        <li><a href="/mesafeli-satis-sozlesmesi">Mesafeli Satış Sözleşmesi</a></li>
                        <li><a href="/kolay-iade-islemleri">Kolay İade İşlemleri</a></li>
                        <li><a href="/uyelik-sozlesmesi">Üyelik Sözleşmesi</a></li>
                        <li><a href="/bilgi-toplumu-hizmetleri">Bilgi Toplumu Hizmetleri</a></li>
                        <li><a href="/beden-tablosu">Beden Tablosu</a></li>
                        <li><a href="/cerez-tercihlerini-degistir">Çerez Tercihlerini Değiştir</a></li>
                        <li><a href="/tum-kampanyalar">Tüm Kampanyalar</a></li>
                    </ul>
                </section>
            </div>

            <!-- Üçüncü Sütun -->
            <div class="third-column">
                <section class="category">
                    <h2>Hesabım</h2>
                    <ul>
                        <li><a href="/siparislerim">Siparişlerim</a></li>
                        <li><a href="/favorilerim">Favorilerim</a></li>
                    </ul>
                </section>

                <section class="category">
                    <h2>Bizi Takip Edin</h2>
                    <div class="social-icons">
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-youtube"></i>
                        <i class="bi bi-tiktok"></i>
                    </div>
                </section>

                <section class="category">
                    <h2>APP'İ İNDİR</h2>
                    <div>
                        <img src="/public/assets/images/footer.jpeg" alt="footer image" />
                    </div>
                </section>
            </div>

            <!-- Dördüncü Sütun -->
            <div class="fourth-column">
                <section class="category">
                    <h2>LTB Radio</h2>
                    <ul>
                        <li><a href="/radio-ltb-commerical">Radio LTB Commerical</a></li>
                        <li><a href="/radio-ltb-rock">Radio LTB Rock</a></li>
                        <li><a href="/radio-ltb-electronical">Radio LTB Electronical</a></li>
                        <li><a href="/radio-ltb-lounge">Radio LTB Lounge</a></li>
                    </ul>
                </section>
            </div>

            <!-- Beşinci Sütun -->
            <div class="fifth-column">
                <section class="category">
                    <h2>LTB Destek</h2>
                    <div class="support-buttons">
                        <ul>
                            <li><button><i class="bi bi-telephone"></i> 0850 460 0582</button></li>
                            <li><button><i class="bi bi-file-earmark"></i> İletişim Formu</button></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>

        <div class="footer-bottom">
            <!-- Fiyat ve Türkiye yazısı -->
            <p class="footer-text">
                Tüm fiyatlara KDV dahildir. Üstü çizili fiyat, üreticinin tavsiye ettiği perakende satış fiyatını
                gösterir.
            </p>
            <div class="turkey-payment">
                <div class="turkey-link">Türkiye ></div>
                <div class="payment-logos">
                    <img src="/public/assets/images/axess.png" alt="Axess" />
                    <img src="/public/assets/images/ziraat.png" alt="Ziraat Banka Kart" />
                    <img src="/public/assets/images/bonus-card.png" alt="Bonus Card" />
                    <img src="/public/assets/images/card-finans.png" alt="Card Finans" />
                    <img src="/public/assets/images/maximum.png" alt="Maximum" />
                    <img src="/public/assets/images/world.png" alt="World" />
                    <img src="/public/assets/images/paraf.png" alt="Paraf" />
                </div>
            </div>
            <!-- Telif hakkı -->
            <footer class="footer">
                <div class="container">
                    <p class="copyright">©2024 LTB Türkiye. Tüm hakları saklıdır.</p>
                </div>
            </footer>
        </div>


    </div>





</template>

<style scoped>
.footer-page {
    padding: 20px;
    font-family: 'Mulish', sans-serif;
    background-color: white;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Sayfanın tam yüksekliği */
    justify-content: flex-start;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.category h2 {
    font-size: 24px;
    margin-bottom: 1px;
    color: black;
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
    letter-spacing: 0.3px;
    color: rgb(92, 88, 88);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.category a:hover {
    color: rgb(142, 139, 139);
}

.first-column,
.second-column,
.third-column,
.fourth-column,
.fifth-column {
    flex: 1 1 220px;
    padding: 10px;
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icons i {
    font-size: 24px;
    color: rgb(87, 87, 87);
    cursor: pointer;
    transition: color 0.3s ease;
}

.social-icons i:hover {
    color: grey;
}

.support-buttons ul {
    list-style: none;
    padding: 0;
}

.support-buttons li {
    margin-bottom: 10px;
}

button {
    background-color: white;
    color: rgb(95, 93, 93);
    padding: 10px 20px;
    border: 1px solid black;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 90%;
    /* Buton genişliğini eşitler */
    box-sizing: border-box;
    /* Padding ve border dahil */
}

button:hover {
    color: #aeb0b2;

}

.third-column img {
    width: 100%;
    /* Genişlik ayarı */
    height: auto;
    /* Yükseklik otomatik ayarlanır */
    margin: 5px 0;
}




.footer-bottom {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    /* Yukarı veya aşağı boşluk ayarı */
    align-self: stretch;
    /* Ebeveyn genişliğine uyum sağlar */
}

.footer-text {
    text-align: left;
    margin-bottom: 10px;
    /* Altındaki elemanla araya boşluk ekler */
    font-size: 14px;
    color: black;
}

.turkey-payment {
    display: flex;
    align-items: center;
    /* Görselleri Türkiye yazısıyla hizalar */
    gap: 10px;
    /* Elemanlar arasında boşluk bırakır */
    margin-top: -10px;
    margin-bottom: 60px;
    /* Altındaki yazıyla araya boşluk ekler */

}

.turkey-link {
    font-size: 14px;
    color: black;
}

.footer-bottom p {
    font-size: 14px;
    color: black;
}

.payment-logos {
    display: flex;
    gap: 20px;
    align-items: center;
}

.payment-logos img {
    height: 11px;
    width: auto;
    /* Oran korundu */
    object-fit: contain;
    /* Görselin sığdırılmasını sağlar */
}

.footer-bottom p.bottom {
    text-align: center;
    /* Yazıyı ortalar */
    color: #a49b9b;
    /* Gri renk (değiştirebilirsiniz) */
}

.payment-logos> :first-child {
    margin-left: 300px;
    /* İstediğiniz boşluk miktarını buraya ayarlayın */
}

.footer {
  /* Footer için diğer stiliniz */
  text-align: center;
  padding: 10px;
}

.footer .copyright {
  color: #888;
  font-size: 13px;
}
</style>
