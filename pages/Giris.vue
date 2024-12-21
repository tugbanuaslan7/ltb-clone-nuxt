<template>
    <div class="login-container">
        <!-- Dikey Çizgi Ortada -->
        <div class="vertical-line"></div>

        <!-- Form Sol Tarafa Ortalanmış -->
        <div class="form-container">
            <h2>Giriş Yap</h2>
            <form @submit.prevent="handleSubmit">
                <div class="input-container">
                    <label for="email">*E-mail</label>
                    <input type="email" id="email" v-model="email" required>
                </div>
                <div class="input-container">
                    <label for="password">*Şifre</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <div class="remember-me">
                    <input type="checkbox" id="rememberMe" v-model="rememberMe">
                    <label for="rememberMe">Oturumu Açık Tut</label>
                </div>

                <p><a href="/forget">Şifreni mi unuttun?</a></p>
                <button type="submit">Giriş Yap</button>

                <button class="google-login">
                    <i class="bi bi-google"></i> Google ile Giriş Yap
                </button>
            </form>
        </div>


        <!-- Sağ Tarafa Resim ve Buton -->
        <div class="image-container">
            <img src="https://www.ltbjeans.com/medias/hesab-n-z-yok-mu.jpg?context=bWFzdGVyfGltYWdlc3w3NjMwOHxpbWFnZS9qcGVnfGFHRmpMMmc0TlM4NU1UYzFNak00TmpNNU5qUTJMMmhsYzJGaTRwU0E0cGFTYnVLVWdPS1drbnBmZVc5clgyMTFMbXB3Wnd8NWFhNTYxNGFiOTg1MzI0NmJmYjY3MGJkODI0OWRiMzA5Y2FlMDhkMWUzZjhhZGYzZDZmY2I4YWUwMWI1ZDhiZg"
                alt="Hesabınız Yok Mu?" />
            <button class="signup-button">Hemen Kayıt Ol</button>





        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            rememberMe: false
        }
    },
    methods: {
        handleSubmit() {
            // Giriş işlemleri (API çağrısı vb.) burada yapılacak
            console.log('Giriş yapılıyor:', this.email, this.password, this.rememberMe);
        }
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    /* Formu ortalayacağız */
    align-items: center;
    height: 100vh;
    position: relative;
    background-color: #fff;
    /* Ekranın tamamı beyaz olacak */
    font-family: 'Mulish', sans-serif;
}

.vertical-line {
    position: absolute;
    top: 10%;
    left: 50%;
    /* Ekranın tam ortasında yer alacak */
    transform: translateX(-50%);
    /* Çizgiyi tam ortalayacağız */
    border-left: 2px solid #ccc;
    height: 70%;
    /* Çizginin yüksekliği */
}

.form-container {
    position: absolute;
    left: 10%;
    /* Çizgiden önce yer alacak */
    top: 50%;
    /* Dikeyde ortalanacak */
    transform: translateY(-50%);
    /* Tam ortalamak için */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Başlangıç hizasında olacak */
    justify-content: center;
    width: 400px;
    /* Formun genişliği */
    padding: 20px;
}

.form-container p {
    font-size: 12px;
}

h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    /* Başlık ortalanacak */
}

.input-container {
    width: 100%;
    margin-bottom: 20px;
}

.input-container label {
    display: block;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
}

input {
    width: 100%;
    padding: 10px;
    /* Daha geniş input kutuları */
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
}

input[type="email"],
input[type="password"] {
    width: 400px;
    /* Yatay genişliği artırdık */
}

button {
    padding: 10px 20px;
    background-color: #000000;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    /* Butonlar arasında boşluk */
    width: 100%;
    /* Butonları input ile aynı genişlikte yapmak için */
    font-size: 16px;
    /* Tutarlılık için font boyutu */
    box-sizing: border-box;
    /* Kenar boşluklarını genişlikten hariç tutmak için */
}



.google-login {
    background-color: #e8e6e6;
    color: rgb(0, 0, 0);
    font-weight: 550;
    letter-spacing: 0.5px;
    width: 100%;
    /* Input kutularıyla aynı genişlik */
}

.remember-me {
    color: rgb(168, 163, 163);
    font-size: 14px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.remember-me input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    appearance: none;
    /* Varsayılan tarayıcı görünümünü kaldır */
    -webkit-appearance: none;
    /* Safari desteği için */
    background-color: white;
    /* Kutunun arka plan rengi */
    border: 2px solid #ccc;
    /* Kutunun kenarlığı */
    border-radius: 3px;
    /* Hafif yuvarlatılmış köşeler */
    cursor: pointer;
    display: inline-block;
    position: relative;
}

.remember-me input:checked {
    background-color: white;
    /* Tik olan durumdaki kutunun arka planı */
    border: 2px solid black;
    /* Kenarlığın rengi */
}

.remember-me input:checked::after {
    content: '✔';
    /* Tik işareti */
    color: black;
    /* Siyah tik */
    font-size: 14px;
    /* Tik boyutu */
    position: absolute;
    top: 0;
    left: 4px;
}


.remember-me label {
    margin: 0;
}

p {
    position: absolute;
    right: 0;
    /* Sağ tarafa hizalar */
    margin-top: -40px;
    /* Yazının biraz aşağıda olması için */
}

form p a {
    color: black;
    letter-spacing: 0.5px;
    font-size: 11px;
}

p router-link:hover {
    text-decoration: underline;
}

.image-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
}

.image-container img {
    width: 500px;
    height: auto;
    margin-bottom: 15px;
}

.signup-button {
    padding: 10px 20px;
    background-color: white;
    color: black;
    border: 1px solid black; /* Kenar rengini doğru şekilde tanımladık */
    cursor: pointer;
    font-size: 16px;
    margin-top: 40px;
    font-weight: bold;
    letter-spacing: 0.4px;
    width: 500px; /* Butonu resimle aynı genişlikte yaptık */
    box-sizing: border-box; /* Kenar boşluklarını genişlikten hariç tut */
}

.signup-button:hover {
    border-color: red;
}


</style>