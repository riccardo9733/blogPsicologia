// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA-GwQyIKYSN7Qsg_t-GAwG9wVOUuO3JI",
  authDomain: "blogpsicologia-1ae57.firebaseapp.com",
  projectId: "blogpsicologia-1ae57",
  storageBucket: "blogpsicologia-1ae57.appspot.com", // Corrected storageBucket
  messagingSenderId: "945383576956",
  appId: "1:945383576956:web:444fb3d1797ca47e8700f9",
  measurementId: "G-CSKPNRXZB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

// Export Firebase app and Firestore instance
export { app, db };
