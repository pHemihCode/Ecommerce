import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYVrOIalL1jPA3j1MZThY2lf75OsfcCl4",
  authDomain: "ecommerce-a9f82.firebaseapp.com",
  projectId: "ecommerce-a9f82",
  storageBucket: "ecommerce-a9f82.appspot.com",
  messagingSenderId: "1071400044695",
  appId: "1:1071400044695:web:46e9476b2cd406179281d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)