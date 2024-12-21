<template>
    <div class="campaign-container">
        <!-- Sol Fotoğraf ve İçerik -->
        <div class="campaign-left">
            <img src="/public/assets/images/image-1.jpg" alt="Kampanya Görseli" class="campaign-background" />
            <div class="campaign-content">
                <h2 class="campaign-title">Kampanya ve yeni ürünlerden haberdar olun.</h2>
                <input type="email" class="email-input" placeholder="Email" />
                <div class="campaign-footer">
                    <!-- Gizlilik Politikası ve Checkbox -->
                    <div class="privacy-policy">
                        <input type="checkbox" id="privacy" class="custom-checkbox" />
                        <label for="privacy">
                            <a href="/privacy-policy" class="policy-link" target="_blank">Gizlilik politikası</a>
                            nı okudum ve kabul ediyorum.
                        </label>
                    </div>
                    <!-- Gönder Butonu -->
                    <button class="send-button">Gönder</button>
                </div>
            </div>
        </div>

        <!-- Sağ Fotoğraf -->
        <div class="campaign-right">
            <img src="/public/assets/images/image-2.jpg" alt="Kampanya Görseli" class="campaign-image" />
        </div>
    </div>
</template>



<script lang="ts" setup>

</script>

<style scoped>
.campaign-container {
    font-family: 'Mulish', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
}

/* Sol taraf (Başlık ve Input görselin üzerinde) */
.campaign-left {
    flex: 1;
    position: relative;
    text-align: center;
}

.campaign-background {
    width: 100%;
    height: auto;
    border-radius: none;
    display: block;
}

.campaign-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: left;
    /* İçeriği sola hizalar */
    z-index: 10;
    /* Diğer öğelerin üstüne gelir */
}

.campaign-title {
    font-size: 25px;
    letter-spacing: 0.4px;
    margin-bottom: 20px;
    color: white;
    white-space: nowrap;
    /* Tek satırda kalmasını sağlar */
    overflow: hidden;
    /* Taşan içeriği gizler */
    text-overflow: ellipsis;
    /* Taşan metni üç nokta ile belirtir (opsiyonel) */
}

.email-input {
    width: 100%;
    max-width: 530px;
    /* Maksimum genişlik */
    padding: 10px;
    font-size: 16px;
    border: 0.1px solid white;
    /* Çerçeveyi beyaz yapar */
    outline: none;
    background-color: transparent;
    /* Arka plan rengini kaldırır */
    text-align: left;
    /* Yazıyı sola hizalar */
    color: white;
    /* Yazıyı beyaz yapar */
    z-index: 20;
    /* Kullanıcı etkileşimlerine izin verir */
}

.email-input::placeholder {
    color: white;
    /* Placeholder metni beyaz yapar */
    font-size: 14px;
    letter-spacing: 0.4px;
}

/* Checkbox için temel stil */
.custom-checkbox {
  appearance: none; /* Varsayılan checkbox stilini kaldırır */
  width: 20px;
  height: 20px;
  border: 1px solid white; /* Beyaz çerçeve */
  background-color: transparent; /* Transparan arka plan */
  cursor: pointer;
  position: relative;
  margin-right: 10px;
}

/* Tıklanmış durumda görünen tik işareti */
.custom-checkbox:checked::before {
  content: "✓"; /* Tik işareti */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Tik işaretinin rengi */
  font-size: 16px;
  font-weight: bold;
}




.campaign-footer {
    display: flex;
    justify-content: space-between; /* Sol ve sağa hizalanan öğeler için */
    align-items: center;
    margin-top: 12px;
    width: 100%;
    max-width: 530px; /* E-posta kutusuyla aynı genişlik */
}

.privacy-policy {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.666);
    letter-spacing: 0.3px;
}

.policy-link {
    color: white;
    text-decoration: none;
    margin-right: 5px;
}

.policy-link:hover {
    text-decoration: none;
}



.send-button {
    margin-left: auto;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.send-button:hover {
    background-color: red;
    color: white;
}


/* Sağ taraf (Fotoğraf) */
.campaign-right {
    flex: 1;
    text-align: center;
}

.campaign-image {
    max-width: 100%;
    height: auto;
    border-radius: none;
}
</style>