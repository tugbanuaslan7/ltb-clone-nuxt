// plugins/firebase.ts
import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDEYI1RgY8EU1VXtuceYuDqbnGhgCc0aS4',
  authDomain: 'ltb-clone-nuxt.firebaseapp.com',
  projectId: 'ltb-clone-nuxt',
  storageBucket: 'ltb-clone-nuxt.firebasestorage.app',
  messagingSenderId: '1058531883130',
  appId: '1:1058531883130:web:b2c7f5a0e89c0c8a1463c3',
  measurementId: 'G-8V789ZD14R',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app) as Firestore; // db'yi Firestore tipiyle tanımlıyoruz
const auth = getAuth(app);


// Nuxt Plugin
export default defineNuxtPlugin(() => {
  return {
    provide: {
      db,
      auth,
    },
  };
});