// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b6e39.firebaseapp.com",
  projectId: "mern-estate-b6e39",
  storageBucket: "mern-estate-b6e39.firebasestorage.app",
  messagingSenderId: "82671660124",
  appId: "1:82671660124:web:7690b981ed30b2c27dca99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
