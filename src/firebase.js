// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA95ukfjykvAEUO4GlOT1dgGZBIwPCm5O8",
  authDomain: "react-apple-tv-886ac.firebaseapp.com",
  projectId: "react-apple-tv-886ac",
  storageBucket: "react-apple-tv-886ac.appspot.com",
  messagingSenderId: "600050384357",
  appId: "1:600050384357:web:c78282f77be337d324430c",
  measurementId: "G-EY43NBZ18G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;