import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 700],
        ital: [400],
      },
      Montserrat: true,
    },
    display: 'swap',
    subsets: ['latin'],
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],

  typescript: {
    shim: false, // Nuxt'un typescript desteğini doğru yapılandırmak için shim'i kapatabilirsiniz.
    strict: true,
  },
  

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          defer: true, // Script, sayfa yüklendikten sonra çalışır
        },
      ],
    },
  },

  imports: {
    autoImport: true,
  },
  
  plugins: [
    '~/plugins/firebase.ts', // Firebase eklentisi
  ],
  

  compatibilityDate: '2024-11-30',
});