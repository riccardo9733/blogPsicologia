// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA-GwQyIKYSN7Qsg_t-GAwG9wVOUuO3JI",
  authDomain: "blogpsicologia-1ae57.firebaseapp.com",
  projectId: "blogpsicologia-1ae57",
  storageBucket: "blogpsicologia-1ae57.firebasestorage.app",
  messagingSenderId: "945383576956",
  appId: "1:945383576956:web:444fb3d1797ca47e8700f9",
  measurementId: "G-CSKPNRXZB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
