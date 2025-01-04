// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEYI1RgY8EU1VXtuceYuDqbnGhgCc0aS4",
  authDomain: "ltb-clone-nuxt.firebaseapp.com",
  projectId: "ltb-clone-nuxt",
  storageBucket: "ltb-clone-nuxt.firebasestorage.app",
  messagingSenderId: "1058531883130",
  appId: "1:1058531883130:web:b2c7f5a0e89c0c8a1463c3",
  measurementId: "G-8V789ZD14R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };