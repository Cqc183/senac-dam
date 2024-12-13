// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, signInWithEmailAndPassword, getReactNativePersistence } from 'firebase/auth'; // Nome corrigido
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importação correta

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Efm8gEXpu07ByK-mbH8mnIFPtaY7vrg",
  authDomain: "helloapp-18fe1.firebaseapp.com",
  projectId: "helloapp-18fe1",
  storageBucket: "helloapp-18fe1.firebasestorage.app",
  messagingSenderId: "570644623068",
  appId: "1:570644623068:web:90cc385a08fc500d690e19",
  measurementId: "G-S2EF401TB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Uso correto de AsyncStorage
});

export { app, auth, signInWithEmailAndPassword };
