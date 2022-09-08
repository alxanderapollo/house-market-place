// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACwiTDnbHNJ6K9kJfn8Ai_NGJwu6LpBHU",
  authDomain: "house-marketplace-app-af7df.firebaseapp.com",
  projectId: "house-marketplace-app-af7df",
  storageBucket: "house-marketplace-app-af7df.appspot.com",
  messagingSenderId: "182069014631",
  appId: "1:182069014631:web:bf027e060330a7580524c2",
  measurementId: "G-SN57XS6S33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
