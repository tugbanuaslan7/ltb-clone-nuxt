import { createApp } from 'vue';
import App from './app.vue';
import router from './router';  // Router'ı default import ediyoruz

const app = createApp(App);

app.use(router);  // Router'ı Vue uygulamasına dahil ediyoruz

app.mount('#app');
