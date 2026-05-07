import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from 
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwCSJkqceShtsv-9DnJap6i35gEqVVYj0",
  authDomain: "football-league-a2d5f.firebaseapp.com",
  projectId: "football-league-a2d5f",
  storageBucket: "football-league-a2d5f.firebasestorage.app",
  messagingSenderId: "705560386516",
  appId: "1:705560386516:web:004daf799b70c37cbc9441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);