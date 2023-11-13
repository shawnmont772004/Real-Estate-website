// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3e068.firebaseapp.com",
  projectId: "real-estate-3e068",
  storageBucket: "real-estate-3e068.appspot.com",
  messagingSenderId: "906052943480",
  appId: "1:906052943480:web:3ed0a306a6f964e689b78d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);