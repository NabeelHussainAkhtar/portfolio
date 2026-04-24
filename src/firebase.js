// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbHjhO8T86V8cXwByyrkK5lEh6fZObOX8",
  authDomain: "my-portfolio-7ca60.firebaseapp.com",
  projectId: "my-portfolio-7ca60",
  storageBucket: "my-portfolio-7ca60.firebasestorage.app",
  messagingSenderId: "903325145655",
  appId: "1:903325145655:web:b444d4aa4c1089f8dd3db2",
  measurementId: "G-TP7FF2MGYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
