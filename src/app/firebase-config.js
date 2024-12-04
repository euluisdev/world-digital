// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA77P_WuzXyfV8fjujT8QDc39PqfDlLcqA",
  authDomain: "worlddigitaltec.firebaseapp.com",
  projectId: "worlddigitaltec",
  storageBucket: "worlddigitaltec.firebasestorage.app",
  messagingSenderId: "456158105858",
  appId: "1:456158105858:web:3b2f158819ed506f08321b",
  measurementId: "G-B4ZKP9D8S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);