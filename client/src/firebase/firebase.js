// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyDg_xxNH_advo592eXenwIr4HSjawkHZDQ",
  authDomain: "bullishnetwork-2959f.firebaseapp.com",
  projectId: "bullishnetwork-2959f",
  storageBucket: "bullishnetwork-2959f.appspot.com",
  messagingSenderId: "1055506317452",
  appId: "1:1055506317452:web:3111b566a65d58dd317ba9",
  measurementId: "G-LJ9SNBNN7W"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 
 const provider = new GoogleAuthProvider();

 export { auth, provider };
